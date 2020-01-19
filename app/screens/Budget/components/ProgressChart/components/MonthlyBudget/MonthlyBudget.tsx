import React from "react";
import { View } from "react-native";
import styles from "./MonthlyBudget.styles";
import { Text } from "../../../../../../components";
import { t } from "../../../../../../utils";

interface Prop {
  monthlyEmissionsBudget: number;
}

const MonthlyBudget = ({ monthlyEmissionsBudget = 0 }: Prop) => (
  <View style={styles.container}>
    <Text.Secondary bold center>
      {t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_MONTHLY_BUDGET")}
      <Text.Secondary lightGray center>
        {monthlyEmissionsBudget + " Kg"}
      </Text.Secondary>
    </Text.Secondary>
  </View>
);

export default MonthlyBudget;
