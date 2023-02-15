import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { FormattedNumber } from "react-native-globalize";

import { Text } from "components";
import { userPreferences } from "ducks";
import { calculation, t } from "utils";

import styles from "./PeriodBudget.styles";

interface Props {
  period: string;
  periodEmissionsBudget: number;
}

const PeriodBudget: React.FC<Props> = ({ periodEmissionsBudget = 0, period = "" }) => {
  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  return (
    <View style={styles.container}>
      <Text.Secondary bold center>
        {t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_PERIOD_BUDGET")}
        {period}
        {" : "}
        <Text.Secondary lightGray center>
          <FormattedNumber
            maximumFractionDigits={periodEmissionsBudget > 1000 && useMetricUnits ? 2 : 0}
            value={getDisplayUnitsValue(periodEmissionsBudget, useMetricUnits)}
          />{" "}
          {getDisplayUnits(
            periodEmissionsBudget,
            useMetricUnits,
            !(periodEmissionsBudget > 1000 && useMetricUnits)
          )}
        </Text.Secondary>
      </Text.Secondary>
    </View>
  );
};

export default PeriodBudget;
