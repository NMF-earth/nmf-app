import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import { Layout } from "constant";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, getLocaleForMoment } from "utils";
import { Colors } from "style";

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

  const totalEmissionsRatio = totalEmissions / periodEmissionsBudget;

  const period = moment()
    .locale(getLocaleForMoment(language))
    .format(isMonth ? "MMMM" : "YYYY");

  const circleSize = Layout.screen.width < 400 ? Layout.screen.width / 2 - 10 : 200;

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3 style={styles.header}>{period}</Text.H3>
        <Progress.Circle
          animated={false}
          showsText
          strokeCap={"round"}
          textStyle={styles.textPourcentage}
          thickness={16}
          color={totalEmissionsRatio > 1 ? Colors.warning : Colors.primary}
          unfilledColor={Colors.primary10}
          borderColor={"transparent"}
          borderWidth={2}
          progress={totalEmissionsRatio}
          size={circleSize}
        />
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
      <PeriodBudget period={period} periodEmissionsBudget={periodEmissionsBudget} />
    </View>
  );
};

export default withLocalization(ProgressChart);
