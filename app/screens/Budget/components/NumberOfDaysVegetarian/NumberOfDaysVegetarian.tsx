import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { Text } from "components";
import { t } from "utils";

import styles from "./NumberOfDaysVegetarian.styles";
import { selectors } from "./ducks";

const NumberOfDaysVegetarian: React.FC = () => {
  const isAnyMeatEmissionSaved = useSelector(selectors.isAnyMeatEmissionSaved);
  const daysWithoutEatingMeat = useSelector(selectors.getDaysWithoutEatingMeat);

  let days = null;
  let message = "";

  if (daysWithoutEatingMeat < 3) {
    message = t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_RECENT_MEAT");
  } else if (daysWithoutEatingMeat < 8) {
    days = daysWithoutEatingMeat + " " + t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_DAYS");
    message = t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_NICE_START");
  } else {
    days = daysWithoutEatingMeat + " " + t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_DAYS");
    message = t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_WELL_DONE");
  }

  if (!isAnyMeatEmissionSaved) {
    message = t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_NO_MEAT_SO_FAR");
  }

  return (
    <View style={styles.container}>
      {isAnyMeatEmissionSaved && days ? (
        <View style={styles.daysContainer}>
          <Text.H3 darkGray>{days}</Text.H3>
          <Text.H3> </Text.H3>
          <Text.H3>{t("BUDGET_SCREEN_NUMBER_OF_DAYS_VEGETARIAN_WITHOUT_MEAT")}</Text.H3>
        </View>
      ) : null}
      <Text.H3 center>{message}</Text.H3>
    </View>
  );
};

export default NumberOfDaysVegetarian;
