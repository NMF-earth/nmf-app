import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

import styles from "./Custom.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 1000;

interface Props {
  defaultValueSlider: number;
  setCo2eqKilograms: (arg0: number) => void;
}

export default ({ setCo2eqKilograms, defaultValueSlider }: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);
  setCo2eqKilograms(sliderValue);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>
          {t("ADD_EMISSION_SCREEN_QUANTITY_OF_EMISSION")}
        </Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 blue50>
            {Math.round(sliderValue)}
            <Text.Primary>{" kgCO2eq"}</Text.Primary>
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
    </React.Fragment>
  );
};
