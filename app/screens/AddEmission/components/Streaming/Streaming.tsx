import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { streaming, getInternetUsageCarbonImpact, ElectricityType } from "carbon-footprint";

import { Text } from "components";
import { t, time } from "utils";
import { Colors } from "style";

import styles from "./Streaming.styles";

const MIN_SLIDER_VALUE = 15 * 60;
const MAX_SLIDER_VALUE = 10 * 60 * 60;

interface Props {
  electricityCountry: ElectricityType;
  defaultValueSlider: number;
  emissionModelType: string;
  setDurationSeconds: (arg0: number) => void;
}

const Streaming: React.FC<Props> = ({
  electricityCountry,
  setDurationSeconds,
  emissionModelType,
  defaultValueSlider,
}) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setDurationSeconds(val);
  };
  const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue / 60);
  const carbonValue = getInternetUsageCarbonImpact(
    sliderValue,
    streaming[emissionModelType] * sliderValue,
    electricityCountry
  );

  return (
    <>
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DURATION")}</Text.H3>
        <Text.Primary lightGray>{hours + " hour(s) and " + minutes + " minute(s)."}</Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <Text.H2 darkGray>
          <FormattedNumber
            value={carbonValue > 1 ? carbonValue : carbonValue * 1000}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>{carbonValue > 1 ? "kgCO2eq" : "gCO2eq"}</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Streaming;
