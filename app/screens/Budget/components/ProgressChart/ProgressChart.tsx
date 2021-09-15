import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View } from "react-native";

import { Text } from "components";
import { withLocalization, LocalizationContextProps, getLocaleForMoment } from "utils";

import styles from "./ProgressChart.styles";
import { Legend, Chart, PeriodBudget } from "./components";

interface Props {
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
  isMonth = false,
  language = "",
}: Props & LocalizationContextProps) => {
  if (!monthlyEmissionsBudget) {
    return null;
  }

  const periodEmissionsBudget = isMonth ? monthlyEmissionsBudget : monthlyEmissionsBudget * 12;

  const totalEmissionsPercentage =
    totalEmissions / periodEmissionsBudget > 1 ? 1 : totalEmissions / periodEmissionsBudget;
  const transportEmissionsPercentage =
    transportEmissions / periodEmissionsBudget > 1 ? 1 : transportEmissions / periodEmissionsBudget;
  const foodEmissionsPercentage =
    foodEmissions / periodEmissionsBudget > 1 ? 1 : foodEmissions / periodEmissionsBudget;

  const period = moment()
    .locale(getLocaleForMoment(language))
    .format(isMonth ? "MMMM" : "YYYY");

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3 style={styles.header}>{period}</Text.H3>
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
      <PeriodBudget period={period.toLowerCase()} periodEmissionsBudget={periodEmissionsBudget} />
    </View>
  );
};

export default withLocalization(ProgressChart);
