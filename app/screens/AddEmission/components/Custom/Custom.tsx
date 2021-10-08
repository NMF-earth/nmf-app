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

const Custom: React.FC<Props> = ({ setCo2eqKilograms, defaultValueSlider }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);
  setCo2eqKilograms(sliderValue);

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>{t("ADD_EMISSION_SCREEN_QUANTITY_OF_EMISSION")}</Text.H3>
        <View style={styles.rowContainer}>
          <Text.H3 black70 bold>
            {Math.round(sliderValue)}
          </Text.H3>
          <Text.Primary black70>{" kgCO2eq"}</Text.Primary>
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
    </>
  );
};

export default Custom;
