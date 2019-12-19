import React from "react";
import { View } from "react-native";
import styles from "./Legend.styles";
import { LegendItem } from "../";
import colors from "../../../../../../style/colors";

interface Prop {
  totalEmissions: number;
  foodEmissions: number;
  transportEmissions: number;
  otherEmissions: number;
}

const Legend = ({
  totalEmissions,
  transportEmissions,
  foodEmissions,
  otherEmissions
}: Prop) => {
  const items = [
    {
      name: "Total",
      value: totalEmissions,
      color: colors.apricot
    },
    {
      name: "Transport",
      value: transportEmissions,
      color: colors.mango
    },
    {
      name: "Food",
      value: foodEmissions,
      color: colors.linkGreen
    },
    {
      name: "Other",
      value: otherEmissions,
      color: colors.darkLink70
    }
  ];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem
          key={index}
          name={item.name}
          value={item.value}
          color={item.color}
        />
      ))}
    </View>
  );
};

export default Legend;
