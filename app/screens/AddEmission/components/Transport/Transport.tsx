import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { transport, TransportEnum } from "carbon-footprint";

import { Text, Tag } from "components";
import { t, time, ui, calculation } from "utils";
import { Colors } from "style";

import styles from "./Transport.styles";

const MIN_SLIDER_VALUE = 2;
const MAX_SLIDER_VALUE = 1000;

const MIN_SLIDER_VALUE_PLANE = 20;
const MAX_SLIDER_VALUE_PLANE = 1000;

interface Props {
  defaultValueSlider: number;
  transportType: string;
  setTransportType: (arg0: TransportEnum) => void;
  setDurationMinutes: (arg0: number) => void;
  setDistance: (arg0: number) => void;
}

const TAGS: Array<TransportEnum> = [
  TransportEnum.train,
  TransportEnum.car,
  TransportEnum.bus,
  TransportEnum.plane,
  TransportEnum.boat,
  TransportEnum.motorbike,
];

export default ({
  setDurationMinutes,
  setTransportType,
  transportType,
  setDistance,
  defaultValueSlider,
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    setDurationMinutes(val);
  };

  const renderDuration = () => {
    const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue);

    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_DURATION")}
        </Text.H3>
        <Text.Primary lightGray>
          {hours + " hour(s) and " + minutes + " minute(s)."}
        </Text.Primary>
      </View>
    );
  };

  const renderDistance = () => {
    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_DISTANCE")}
        </Text.H3>
        <Text.Primary lightGray>
          {Math.round(sliderValue) + " kilometer(s)"}
        </Text.Primary>
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_TRANSPORT_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map((item) => (
          <Tag
            key={item}
            selected={transportType === item}
            title={ui.getTranslationModelType(item)}
            onPress={() => setTransportType(item)}
          />
        ))}
        <View style={styles.separator} />
      </ScrollView>
      {transportType === TransportEnum.plane
        ? renderDuration()
        : renderDistance()}
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={
          transportType === TransportEnum.plane
            ? MAX_SLIDER_VALUE_PLANE
            : MAX_SLIDER_VALUE
        }
        minimumValue={
          transportType === TransportEnum.plane
            ? MIN_SLIDER_VALUE_PLANE
            : MIN_SLIDER_VALUE
        }
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_TOTAL")}
        </Text.H3>
        <Text.H2 style={{ color: Colors.blue50 }}>
          <FormattedNumber
            value={
              transportType === TransportEnum.plane
                ? calculation.getFlightEmissionValue(sliderValue) *
                  transport[calculation.getFlightType(sliderValue)]
                : sliderValue * 1000 * transport[transportType]
            }
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </React.Fragment>
  );
};
