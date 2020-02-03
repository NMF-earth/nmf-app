import React, { useState } from "react";
import { View, Slider } from "react-native";

import styles from "./Custom.styles";
import { Text } from "../../../../components";
import { Colors } from "../../../../style";
import { t } from "../../../../utils";

const DEFAULT_SLIDER_VALUE = 800;
const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 5000;

interface Props {
  setCo2eqKilograms: (arg0: number) => void;
}

export default ({ setCo2eqKilograms }: Props) => {
  const [sliderValue, setSliderValue] = useState(DEFAULT_SLIDER_VALUE);
  setCo2eqKilograms(sliderValue);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>
          {t("ADD_EMISSION_QUANTITY_OF_EMISSION")}
        </Text.H3>
        <Text.Primary lightGray>
          {Math.round(sliderValue) + " kgCO2eq"}
        </Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={Colors.linkGreen}
        maximumTrackTintColor={Colors.gray}
        thumbTintColor={Colors.linkGreen}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={setSliderValue}
      />
    </React.Fragment>
  );
};
