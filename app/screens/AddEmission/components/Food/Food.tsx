import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "react-native-slider";
import { FormattedNumber } from "react-native-globalize";

import styles from "./Food.styles";
import { Text, Tag } from "../../../../components";
import { Colors } from "../../../../style";
import { t } from "../../../../utils";
import { FoodEnum, food } from "carbon-footprint";

const DEFAULT_SLIDER_VALUE = 200;
const MIN_SLIDER_VALUE = 20;
const MAX_SLIDER_VALUE = 500;

interface Props {
  foodType: string;
  setFoodType: (arg0: FoodEnum) => void;
  setCo2eqKilograms: (arg0: number) => void;
  setQuantityKilograms: (arg0: number) => void;
}

export default ({ setFoodType, foodType }: Props) => {
  const [sliderValue, setValue] = useState(DEFAULT_SLIDER_VALUE);

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
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onValueChange={setValue}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_TOTAL")}</Text.H3>
        <Text.H1 green>
          <FormattedNumber
            value={(sliderValue / 1000) * food[foodType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>kgCO2eq</Text.Primary>
        </Text.H1>
      </View>
    </React.Fragment>
  );
};
