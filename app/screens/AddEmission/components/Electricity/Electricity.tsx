import React, { useState } from "react";
import { toUpper } from "ramda";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { electricity, ElectricityEnum } from "carbon-footprint";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

import styles from "./Electricity.styles";

const MIN_SLIDER_VALUE = 3.6 * Math.pow(10, 6);
const MAX_SLIDER_VALUE = 3.6 * Math.pow(10, 9);

interface Props {
  electricityCountry: string;
  defaultValueSlider: number;
  setElectricityConsumption: (arg0: number) => void;
}

const Electricity = ({
  electricityCountry,
  setElectricityConsumption,
  defaultValueSlider,
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);
  setElectricityConsumption(sliderValue);

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>
          {t("ADD_EMISSION_SCREEN_ELECTRICITY_CONSUMPTION")}
        </Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 blue50>
            {Math.round((sliderValue / 3.6) * Math.pow(10, -6))}
            <Text.Primary>{" kWh - "}</Text.Primary>
            <Text.Secondary lightGray>
              {toUpper(ElectricityEnum[electricityCountry])}
            </Text.Secondary>
          </Text.H2>
        </View>
      </View>
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={setSliderValue}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_TOTAL")}
        </Text.H3>
        <Text.H2 blue50>
          <FormattedNumber
            value={sliderValue * electricity[electricityCountry]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Electricity;
