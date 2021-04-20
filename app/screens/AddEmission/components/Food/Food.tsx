import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { FoodType, food } from "carbon-footprint";

import { Text, Tag } from "components";
import { t, ui } from "utils";
import { Colors } from "style";

import styles from "./Food.styles";

const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 500;

interface Props {
  defaultValueSlider: number;
  foodType: string;
  setFoodType: (arg0: FoodType) => void;
  setQuantity: (arg0: number) => void;
}

const TAGS: Array<FoodType> = [
  FoodType.redMeat,
  FoodType.whiteMeat,
  FoodType.coffee,
  FoodType.chocolate,
  FoodType.fish,
  FoodType.lamb,
  FoodType.beef,
  FoodType.cheese,
  FoodType.pork,
  FoodType.turkey,
  FoodType.chicken,
  FoodType.tuna,
  FoodType.eggs,
  FoodType.potatoes,
  FoodType.rice,
  FoodType.nuts,
  FoodType.beans,
  FoodType.tofu,
  FoodType.vegetables,
  FoodType.milk,
  FoodType.fruit,
  FoodType.lentils,
];

export default ({ setFoodType, foodType, setQuantity, defaultValueSlider }: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider * 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use kilograms as reference (and not grams), we need to divide by 1000 */
    setQuantity(val / 1000);
  };

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_FOOD_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map((item) => (
          <Tag
            key={item}
            selected={foodType === item}
            title={ui.getTranslationModelType(item)}
            onPress={() => setFoodType(item)}
          />
        ))}
        <View style={styles.separator} />
      </ScrollView>
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
        <Text.H2 blue50>
          <FormattedNumber
            value={(sliderValue / 1000) * food[foodType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </React.Fragment>
  );
};
