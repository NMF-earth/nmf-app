import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { isEmpty, pipe, not } from "ramda";
import { Text } from "../../../../components";
import styles from "./NumberOfDaysVegetarian.styles";
import { selectors } from "./ducks";

const NumberOfDaysVegetarian = () => {
  const isAnyMeatEmissionSaved = useSelector(selectors.isAnyMeatEmissionSaved);
  const daysWithoutEatingMeat = useSelector(selectors.getDaysWithoutEatingMeat);

  let days = null;
  let message = "";

  if (daysWithoutEatingMeat < 1) {
    message = "Meat is murder, please don't eat animals 🥺";
  } else if (daysWithoutEatingMeat < 8) {
    days = daysWithoutEatingMeat + " days";
    message = "That's a nice start! 👌";
  } else {
    days = daysWithoutEatingMeat + " days";
    message = "Well done! 🎉";
  }

  if (!isAnyMeatEmissionSaved) {
    message =
      "Seems like you haven't eaten any meat since you are using the app, good job! 🍾";
  }

  return (
    <View style={styles.container}>
      {isAnyMeatEmissionSaved && days ? (
        <View style={styles.daysContainer}>
          <Text.H3 green>{days}</Text.H3>
          <Text.H3> without meat!</Text.H3>
        </View>
      ) : null}
      <Text.H3 center>{message}</Text.H3>
    </View>
  );
};

export default NumberOfDaysVegetarian;
