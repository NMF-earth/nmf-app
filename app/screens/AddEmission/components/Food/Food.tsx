import React, { useState } from "react";
import { View, ScrollView, Slider } from "react-native";
import { FormattedNumber } from "react-native-globalize";

import styles from "./Food.styles";
import { Text, Tag } from "../../../../components";
import { Colors } from "../../../../style";
import { t } from "../../../../utils";
import { FoodEnum, food } from "carbon-footprint";

const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 500;

interface Props {
  defaultValueSlider: number;
  foodType: string;
  setFoodType: (arg0: FoodEnum) => void;
  setQuantity: (arg0: number) => void;
}

export default ({
  setFoodType,
  foodType,
  setQuantity,
  defaultValueSlider
}: Props) => {
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
        <Text.H3>{t("ADD_EMISSION_FOOD_TYPE")}</Text.H3>
      </View>
      <ScrollView horizontal style={styles.tagContainer}>
        <Tag
          selected={foodType === FoodEnum.redMeat}
          title={t("ADD_EMISSION_RED_MEAT")}
          onPress={() => setFoodType(FoodEnum.redMeat)}
        />
        <Tag
          selected={foodType === FoodEnum.whiteMeat}
          title={t("ADD_EMISSION_WHITE_MEAT")}
          onPress={() => setFoodType(FoodEnum.whiteMeat)}
        />
      </ScrollView>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>
          {t("ADD_EMISSION_QUANTITY")}
        </Text.H3>
        <Text.Primary lightGray>
          {Math.round(sliderValue) + " grams"}
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
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_TOTAL")}</Text.H3>
        <Text.H2 green>
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
