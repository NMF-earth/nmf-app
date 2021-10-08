import React, { useState } from "react";
import { toUpper } from "ramda";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { electricity, ElectricityType } from "carbon-footprint";

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

const Electricity: React.FC<Props> = ({
  electricityCountry,
  setElectricityConsumption,
  defaultValueSlider,
}) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);
  setElectricityConsumption(sliderValue);

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>{t("ADD_EMISSION_SCREEN_ELECTRICITY_CONSUMPTION")}</Text.H3>
        <View style={styles.rowContainer}>
          <Text.H3 black70>
            {Math.round((sliderValue / 3.6) * Math.pow(10, -6))}
            <Text.Primary black70>{" kWh - "}</Text.Primary>
            <Text.Secondary lightGray>
              {toUpper(ElectricityType[electricityCountry])}
            </Text.Secondary>
          </Text.H3>
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
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <View style={styles.rowContainer}>
          <Text.H3 black70>
            <FormattedNumber
              value={sliderValue * electricity[electricityCountry]}
              maximumFractionDigits={2}
            />{" "}
          </Text.H3>
          <Text.Primary black70>kgCO2eq</Text.Primary>
        </View>
      </View>
    </>
  );
};

export default Electricity;
