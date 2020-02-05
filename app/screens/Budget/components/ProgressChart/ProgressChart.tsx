import React from "react";
import { View } from "react-native";
import styles from "./ProgressChart.styles";
import { Legend, Chart, PeriodBudget } from "./components";
import { Text } from "../../../../components";
import { t } from "../../../../utils";

interface Prop {
  isMonth?: boolean;
  totalEmissions: number;
  foodEmissions: number;
  transportEmissions: number;
  otherEmissions: number;
  monthlyEmissionsBudget: number;
}

const ProgressChart = ({
  totalEmissions = 0,
  foodEmissions = 0,
  transportEmissions = 0,
  otherEmissions = 0,
  monthlyEmissionsBudget = 0,
  isMonth = false
}: Prop) => {
  if (!monthlyEmissionsBudget) {
    return null;
  }

  const totalEmissionsPercentage = totalEmissions / monthlyEmissionsBudget;
  const transportEmissionsPercentage =
    transportEmissions / monthlyEmissionsBudget;
  const foodEmissionsPercentage = foodEmissions / monthlyEmissionsBudget;

  const period = isMonth
    ? t("BUDGET_SCREEN_THIS_MONTH")
    : t("BUDGET_SCREEN_THIS_YEAR");

  const periodEmissionsBudget = isMonth
    ? monthlyEmissionsBudget
    : monthlyEmissionsBudget * 12;

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3>{period}</Text.H3>
      </View>
      <Chart
        totalEmissionsPercentage={totalEmissionsPercentage}
        transportEmissionsPercentage={transportEmissionsPercentage}
        foodEmissionsPercentage={foodEmissionsPercentage}
      />
      <Legend
        totalEmissions={totalEmissions}
        foodEmissions={foodEmissions}
        transportEmissions={transportEmissions}
        otherEmissions={otherEmissions}
      />
      <PeriodBudget
        period={period.toLowerCase()}
        periodEmissionsBudget={periodEmissionsBudget}
      />
    </View>
  );
};

export default ProgressChart;
