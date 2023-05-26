import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { food } from "carbon-footprint";

import { Text } from "components";
import { userPreferences } from "ducks";
import { t, calculation } from "utils";
import { Colors } from "style";

import styles from "./Food.styles";

const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 500;

interface Props {
  defaultValueSlider: number;
  emissionModelType: string;
  setQuantity: (arg0: number) => void;
}

const Food: React.FC<Props> = ({ emissionModelType, setQuantity, defaultValueSlider }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider * 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use kilograms as reference (and not grams), we need to divide by 1000 */
    setQuantity(val / 1000);
  };

  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_QUANTITY")}</Text.H3>
        <Text.Primary lightGray>
          {(useMetricUnits
            ? getDisplayUnitsValue(sliderValue / 1000, useMetricUnits)
            : getDisplayUnitsValue(sliderValue / 1000, useMetricUnits).toFixed(1)) +
            " " +
            getDisplayUnits(sliderValue / 1000, useMetricUnits)}
        </Text.Primary>
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
              (sliderValue / 1000) * food[emissionModelType],
              useMetricUnits
            )}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>
            {getDisplayUnits((sliderValue / 1000) * food[emissionModelType], useMetricUnits) +
              "CO2eq"}
          </Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Food;
