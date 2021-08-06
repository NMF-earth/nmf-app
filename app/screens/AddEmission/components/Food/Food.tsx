import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { food } from "carbon-footprint";

import { Text } from "components";
import { t } from "utils";
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

  return (
    <>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_QUANTITY")}</Text.H3>
        <Text.Primary lightGray>{Math.round(sliderValue) + " grams"}</Text.Primary>
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
            value={(sliderValue / 1000) * food[emissionModelType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Food;
