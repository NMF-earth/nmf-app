import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View } from "react-native";

import { Text } from "components";
import { withLocalization, LocalizationContextProps, getLocaleForMoment } from "utils";

import styles from "./ProgressChart.styles";
import { Legend, PeriodBudget } from "./components";

interface Props {
  isMonth?: boolean;
  totalEmissions: number;
  foodEmissions: number;
  mealEmissions: number;
  transportEmissions: number;
  streamingEmissions: number;
  purchaseEmissions: number;
  fashionEmissions: number;
  electricityEmissions: number;
  productScannedEmissions: number;
  customEmissions: number;
  monthlyEmissionsBudget: number;
}

const ProgressChart = ({
  totalEmissions = 0,
  foodEmissions = 0,
  mealEmissions = 0,
  transportEmissions = 0,
  streamingEmissions = 0,
  purchaseEmissions = 0,
  fashionEmissions = 0,
  electricityEmissions = 0,
  productScannedEmissions = 0,
  customEmissions = 0,
  monthlyEmissionsBudget = 0,
  isMonth = false,
  language = "",
}: Props & LocalizationContextProps) => {
  if (!monthlyEmissionsBudget) {
    return null;
  }

  const periodEmissionsBudget = isMonth ? monthlyEmissionsBudget : monthlyEmissionsBudget * 12;

  const totalEmissionsPercentage = Math.round((totalEmissions / periodEmissionsBudget) * 100);

  const period = moment()
    .locale(getLocaleForMoment(language))
    .format(isMonth ? "MMMM" : "YYYY");

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3 style={styles.header}>{period}</Text.H3>
        <Text.H1 lightGray style={styles.subHeader}>
          {totalEmissionsPercentage + "%"}
        </Text.H1>
      </View>
      <Legend
        totalEmissions={totalEmissions}
        foodEmissions={foodEmissions}
        mealEmissions={mealEmissions}
        transportEmissions={transportEmissions}
        streamingEmissions={streamingEmissions}
        purchaseEmissions={purchaseEmissions}
        fashionEmissions={fashionEmissions}
        electricityEmissions={electricityEmissions}
        productScannedEmissions={productScannedEmissions}
        customEmissions={customEmissions}
      />
      <PeriodBudget period={period.toLowerCase()} periodEmissionsBudget={periodEmissionsBudget} />
    </View>
  );
};

export default withLocalization(ProgressChart);
