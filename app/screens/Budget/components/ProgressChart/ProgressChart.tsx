import React from "react";
import { View } from "react-native";
import styles from "./ProgressChart.styles";
import { Legend, Chart, MonthlyBudget } from "./components";

interface Prop {
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
  monthlyEmissionsBudget = 0
}: Prop) => {
  if (!monthlyEmissionsBudget) {
    return null;
  }

  const totalEmissionsPercentage = totalEmissions / monthlyEmissionsBudget;
  const transportEmissionsPercentage =
    transportEmissions / monthlyEmissionsBudget;
  const foodEmissionsPercentage = foodEmissions / monthlyEmissionsBudget;

  return (
    <View style={styles.container}>
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
      <MonthlyBudget monthlyEmissionsBudget={monthlyEmissionsBudget} />
    </View>
  );
};

export default ProgressChart;
