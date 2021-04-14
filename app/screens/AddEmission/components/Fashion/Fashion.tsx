import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { FashionType, fashion } from "carbon-footprint";

import { Text, Tag } from "components";
import { t, ui } from "utils";
import { Colors } from "style";

import styles from "./Fashion.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 10;

interface Props {
  defaultValueSlider: number;
  fashionType: string;
  setFashionType: (arg0: FashionType) => void;
  setQuantity: (arg0: number) => void;
}

const TAGS: Array<FashionType> = [
  FashionType.coat,
  FashionType.dress,
  FashionType.jeans,
  FashionType.shirt,
  FashionType.shoes,
  FashionType.sweater,
  FashionType.tshirt,
];

export default ({
  setFashionType,
  fashionType,
  setQuantity,
  defaultValueSlider,
}: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setQuantity(val);
  };

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_FASHION_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map((item) => (
          <Tag
            key={item}
            selected={fashionType === item}
            title={ui.getTranslationModelType(item)}
            onPress={() => setFashionType(item)}
          />
        ))}
        <View style={styles.separator} />
      </ScrollView>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_QUANTITY")}
        </Text.H3>
        <Text.Primary lightGray>
          {sliderValue + " " + t("ADD_EMISSION_SCREEN_ITEMS")}
        </Text.Primary>
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
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_SCREEN_TOTAL")}
        </Text.H3>
        <Text.H2 blue50>
          <FormattedNumber
            value={sliderValue * fashion[fashionType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </React.Fragment>
  );
};
