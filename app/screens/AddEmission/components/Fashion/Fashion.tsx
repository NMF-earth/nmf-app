import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { fashion } from "carbon-footprint";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

import styles from "./Fashion.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 10;

interface Props {
  defaultValueSlider: number;
  emissionModelType: string;
  setQuantity: (arg0: number) => void;
}

const Fashion: React.FC<Props> = ({ emissionModelType, setQuantity, defaultValueSlider }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setQuantity(val);
  };

  return (
    <>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_QUANTITY")}</Text.H3>
        <Text.Primary lightGray>{sliderValue + " " + t("ADD_EMISSION_SCREEN_ITEMS")}</Text.Primary>
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
            value={sliderValue * fashion[emissionModelType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Fashion;
