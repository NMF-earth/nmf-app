import React, { useState } from "react";
import { toUpper } from "ramda";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { electricity, ElectricityType } from "carbon-footprint";

import { Text } from "components";
import { userPreferences } from "ducks";
import { t, calculation } from "utils";
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

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setElectricityConsumption(val);
  };

  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>{t("ADD_EMISSION_SCREEN_ELECTRICITY_CONSUMPTION")}</Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 darkGray>
            {Math.round((sliderValue / 3.6) * Math.pow(10, -6))}
            <Text.Primary>{" kWh - "}</Text.Primary>
            <Text.Secondary lightGray>
              {toUpper(ElectricityType[electricityCountry])}
            </Text.Secondary>
          </Text.H2>
        </View>
      </View>
      <Slider
        minimumTrackTintColor={Colors.primary}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.primary}
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
            value={getDisplayUnitsValue(
              sliderValue * electricity[electricityCountry],
              useMetricUnits
            )}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>
            {getDisplayUnits(sliderValue * electricity[electricityCountry], useMetricUnits) +
              "CO2eq"}
          </Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Electricity;
