import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

import styles from "./ProductScanned.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 10;

interface Props {
  productCarbonFootprint: number;
  setCo2eqKilograms: (arg0: number) => void;
}

const ProductScanned: React.FC<Props> = ({ setCo2eqKilograms, productCarbonFootprint }) => {
  const [sliderValue, setSliderValue] = useState(1.4);
  const emissionAmount =
    productCarbonFootprint < 1
      ? Math.round(Math.round(sliderValue) * productCarbonFootprint * 1000) / 1000
      : Math.round(Math.round(sliderValue) * productCarbonFootprint * 10) / 10;

  setCo2eqKilograms(emissionAmount);

  if (!productCarbonFootprint) {
    return;
  }

  return (
    <>
      <View style={styles.container}>
        <Text.H3 style={styles.header}>{t("ADD_EMISSION_SCREEN_QUANTITY_OF_EMISSION")}</Text.H3>
        <View style={{ flexDirection: "row" }}>
          <Text.H2 darkGray>
            {Math.round(sliderValue) + " "}
            <Text.Primary>{t("ADD_EMISSION_SCREEN_ITEMS") + " - "}</Text.Primary>
          </Text.H2>

          <Text.H2 darkGray>
            {emissionAmount}
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
    </>
  );
};

export default ProductScanned;
