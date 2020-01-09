import React, { useState } from "react";
import { View } from "react-native";
import Slider from "react-native-slider";

import styles from "./Custom.styles";
import { Text } from "../../../../components";
import colors from "../../../../style/colors";
import { t } from "../../../../utils/translations";

const DEFAULT_SLIDER_VALUE = 800;
const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 5000;

export default () => {
  const [sliderValue, setValue] = useState(DEFAULT_SLIDER_VALUE);

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
        minimumTrackTintColor={colors.linkGreen}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onValueChange={setValue}
      />
    </React.Fragment>
  );
};
