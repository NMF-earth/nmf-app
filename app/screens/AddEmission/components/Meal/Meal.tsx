import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { MealType, meal } from "carbon-footprint";

import { Text, Tag } from "components";
import { t, ui } from "utils";
import { Colors } from "style";

import styles from "./Meal.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 20;

interface Props {
  defaultValueSlider: number;
  mealType: string;
  setMealType: (arg0: MealType) => void;
  setQuantity: (arg0: number) => void;
}

const TAGS: Array<MealType> = [
  MealType.highMeat,
  MealType.mediumMeat,
  MealType.lowMeat,
  MealType.pescetarian,
  MealType.vegetarian,
  MealType.vegan,
];

export default ({ setMealType, mealType, setQuantity, defaultValueSlider }: Props) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setQuantity(val);
  };

  return (
    <React.Fragment>
      <View style={styles.typeContainer}>
        <Text.H3>{t("ADD_EMISSION_SCREEN_MEAL_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        {TAGS.map((item) => (
          <Tag
            key={item}
            selected={mealType === item}
            title={ui.getTranslationModelType(item)}
            onPress={() => setMealType(item)}
          />
        ))}
        <View style={styles.separator} />
      </ScrollView>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_QUANTITY")}</Text.H3>
        <Text.Primary lightGray>{sliderValue + " " + t("ADD_EMISSION_SCREEN_MEALS")}</Text.Primary>
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
          <FormattedNumber value={sliderValue * meal[mealType]} maximumFractionDigits={2} />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H2>
      </View>
    </React.Fragment>
  );
};
