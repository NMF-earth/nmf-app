import React from "react";
import { View } from "react-native";
import styles from "./ProgressChart.styles";
import { Legend, Chart, PeriodBudget } from "./components";
import { Text } from "../../../../components";
import moment from "moment";
// TODO: import all languages and apply according to phone settings
// import "moment/locale/fr";
// moment.locale("fr");

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

  const periodEmissionsBudget = isMonth
    ? monthlyEmissionsBudget
    : monthlyEmissionsBudget * 12;

  const totalEmissionsPercentage =
    totalEmissions / periodEmissionsBudget > 1
      ? 1
      : totalEmissions / periodEmissionsBudget;
  const transportEmissionsPercentage =
    transportEmissions / periodEmissionsBudget > 1
      ? 1
      : transportEmissions / periodEmissionsBudget;
  const foodEmissionsPercentage =
    foodEmissions / periodEmissionsBudget > 1
      ? 1
      : foodEmissions / periodEmissionsBudget;

  const period = isMonth ? moment().format("MMMM") : moment().format("YYYY");

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
