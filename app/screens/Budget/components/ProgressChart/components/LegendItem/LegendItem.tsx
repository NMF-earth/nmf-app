import React from "react";
import { View } from "react-native";

import { Text } from "components";

import styles from "./LegendItem.styles";

interface Props {
  name: string;
  amount: number;
  totalAmount: number;
}

const LegendItem: React.FC<Props> = ({ name = "", amount = 0, totalAmount = 0 }) => {
  if (amount === 0 || totalAmount === 0) {
    return null;
  }

  let showPercentage = true;
  let unitAmount = " kg - ";

  const percentage = Math.round((amount / totalAmount) * 100);

  if (totalAmount == amount || !percentage) {
    showPercentage = false;
    unitAmount = " kg";
  }

  return (
    <View style={styles.container}>
      <Text.Secondary>{name + " : "}</Text.Secondary>
      <Text.Secondary lightGray>{amount + unitAmount}</Text.Secondary>
      {showPercentage && <Text.Secondary lightGray>{percentage + " %"}</Text.Secondary>}
    </View>
  );
};

export default LegendItem;
