import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Text } from "../../../../components";
import styles from "./NumberOfDaysVegetarian.styles";
import { selectors } from "./ducks";

const NumberOfDaysVegetarian = () => {
  const daysWithoutEatingMeat = useSelector(selectors.getDaysWithoutEatingMeat);
  console.log(
    "NumberOfDaysVegetarian -> daysWithoutEatingMeat",
    daysWithoutEatingMeat
  );

  return (
    <View style={styles.container}>
      <View style={styles.daysContainer}>
        <Text.H3 green>45 days</Text.H3>
        <Text.H3> without meat!</Text.H3>
      </View>
      <Text.H3>Good job 🎉</Text.H3>
    </View>
  );
};

export default NumberOfDaysVegetarian;
