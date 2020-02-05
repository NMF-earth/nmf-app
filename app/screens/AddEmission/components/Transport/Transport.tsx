import React, { useState } from "react";
import { View, ScrollView, Slider } from "react-native";
import { FormattedNumber } from "react-native-globalize";

import styles from "./Transport.styles";
import { Text, Tag } from "../../../../components";
import { Colors } from "../../../../style";
import { t, time } from "../../../../utils";
import { transport, TransportEnum } from "carbon-footprint";
import { TranslationKeys } from "../../translations";

const MIN_SLIDER_VALUE = 2;
const MAX_SLIDER_VALUE = 1000;

const MIN_SLIDER_VALUE_PLANE = 20;
const MAX_SLIDER_VALUE_PLANE = 1200;

interface Props {
  defaultValueSlider: number;
  transportType: string;
  setTransportType: (arg0: TransportEnum) => void;
  setDistance: (arg0: number) => void;
}

interface TransportTag {
  title: keyof TranslationKeys;
  type: TransportEnum;
}

const TAGS: TransportTag[] = [
  {
    title: "ADD_EMISSION_TRAIN",
    type: TransportEnum.train
  },
  {
    title: "ADD_EMISSION_CAR",
    type: TransportEnum.car
  },
  {
    title: "ADD_EMISSION_PLANE",
    type: TransportEnum.plane
  },
  {
    title: "ADD_EMISSION_BOAT",
    type: TransportEnum.boat
  }
];

export default ({
  setTransportType,
  transportType,
  setDistance,
  defaultValueSlider
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    // TODO: set duration
  };

  const renderDuration = () => {
    const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue);

    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_DURATION")}
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
          {t("ADD_EMISSION_DISTANCE")}
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
        <Text.H3>{t("ADD_EMISSION_TRANSPORT_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map(item => (
          <Tag
            key={item.type}
            selected={transportType === item.type}
            title={t(item.title)}
            onPress={() => setTransportType(item.type)}
          />
        ))}
      </ScrollView>
      {transportType === TransportEnum.plane
        ? renderDuration()
        : renderDistance()}
      <Slider
        minimumTrackTintColor={Colors.linkGreen}
        maximumTrackTintColor={Colors.gray}
        thumbTintColor={Colors.linkGreen}
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
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_TOTAL")}</Text.H3>
        <Text.H1 green>
          <FormattedNumber
            value={sliderValue * 1000 * transport[transportType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H1>
      </View>
    </React.Fragment>
  );
};
