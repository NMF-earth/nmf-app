import React from "react";
import { View } from "react-native";
import styles from "./MonthlyBudget.styles";
import { Text } from "../../../../../../components";

interface Prop {
  monthlyEmissionsBudget: number;
}

const MonthlyBudget = ({ monthlyEmissionsBudget = 0 }: Prop) => (
  <View style={styles.container}>
    <Text.Secondary bold center>
      Budget for this month :{" "}
      <Text.Secondary lightGray center>
        {monthlyEmissionsBudget + " Kg"}
      </Text.Secondary>
    </Text.Secondary>
  </View>
);

export default MonthlyBudget;
