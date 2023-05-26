import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { transport, TransportType } from "carbon-footprint";

import { Text } from "components";
import { userPreferences } from "ducks";
import { t, time, calculation } from "utils";
import { Colors } from "style";

import styles from "./Transport.styles";
import { MeasureType } from "../../../../types/measureType";

const MIN_SLIDER_VALUE = 2;
const MAX_SLIDER_VALUE = 1000;

const MIN_SLIDER_VALUE_PLANE = 20;
const MAX_SLIDER_VALUE_PLANE = 1000;

interface Props {
  defaultValueSlider: number;
  emissionModelType: string;
  setDurationMinutes: (arg0: number) => void;
  setDistance: (arg0: number) => void;
}

const Transport: React.FC<Props> = ({
  setDurationMinutes,
  emissionModelType,
  setDistance,
  defaultValueSlider,
}) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    setDurationMinutes(val);
  };

  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getImperialMetricValue = calculation.getImperialMetricValue;
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  const renderDuration = () => {
    const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue);

    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DURATION")}</Text.H3>
        <Text.Primary lightGray>{hours + " hour(s) and " + minutes + " minute(s)."}</Text.Primary>
      </View>
    );
  };

  const renderDistance = () => {
    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DISTANCE")}</Text.H3>
        <Text.Primary lightGray>
          {Math.round(getImperialMetricValue(sliderValue, useMetricUnits, MeasureType.length)) +
            (useMetricUnits ? " kilometer(s)" : " mile(s)")}
        </Text.Primary>
      </View>
    );
  };

  return (
    <>
      {emissionModelType === TransportType.plane ? renderDuration() : renderDistance()}
      <Slider
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.primary}
        style={styles.slider}
        maximumValue={
          emissionModelType === TransportType.plane ? MAX_SLIDER_VALUE_PLANE : MAX_SLIDER_VALUE
        }
        minimumValue={
          emissionModelType === TransportType.plane ? MIN_SLIDER_VALUE_PLANE : MIN_SLIDER_VALUE
        }
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <Text.H2 darkGray>
          <FormattedNumber
            value={getDisplayUnitsValue(
              emissionModelType === TransportType.plane
                ? calculation.getFlightEmissionValue(sliderValue) *
                    transport[calculation.getFlightType(sliderValue)]
                : sliderValue * 1000 * transport[emissionModelType],
              useMetricUnits
            )}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>
            {getDisplayUnits(
              emissionModelType === TransportType.plane
                ? calculation.getFlightEmissionValue(sliderValue) *
                    transport[calculation.getFlightType(sliderValue)]
                : sliderValue * 1000 * transport[emissionModelType],
              useMetricUnits
            ) + "CO2eq"}
          </Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Transport;
