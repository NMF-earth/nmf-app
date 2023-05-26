import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Slider from "@react-native-community/slider";

import { Text } from "components";
import { userPreferences } from "ducks";
import { t, calculation } from "utils";
import { Colors } from "style";

import styles from "./Custom.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 1000;

interface Props {
  defaultValueSlider: number;
  setCo2eqKilograms: (arg0: number) => void;
}

const Custom: React.FC<Props> = ({ setCo2eqKilograms, defaultValueSlider }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    setSliderValue(value);
    setCo2eqKilograms(value);
  };

  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>{t("ADD_EMISSION_SCREEN_QUANTITY_OF_EMISSION")}</Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 darkGray>
            {Math.round(getDisplayUnitsValue(sliderValue, useMetricUnits))}
            <Text.Primary>
              {" " + getDisplayUnits(sliderValue, useMetricUnits) + "CO2eq"}
            </Text.Primary>
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
    </>
  );
};

export default Custom;
