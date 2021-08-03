import React from "react";
import { View } from "react-native";

import { Text } from "components";
import { t } from "utils";

import styles from "./PeriodBudget.styles";

interface Props {
  period: string;
  periodEmissionsBudget: number;
}

const PeriodBudget: React.FC<Props> = ({ periodEmissionsBudget = 0, period = "" }) => {
  let budget = periodEmissionsBudget.toString();
  let units = " kg";
  if (periodEmissionsBudget > 999) {
    budget = (periodEmissionsBudget / 1000).toFixed(2);
    units = " ton(s)";
  }

  return (
    <View style={styles.container}>
      <Text.Secondary bold center>
        {t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_PERIOD_BUDGET")}
        {period}
        {" : "}
        <Text.Secondary lightGray center>
          {budget + units}
        </Text.Secondary>
      </Text.Secondary>
    </View>
  );
};

export default PeriodBudget;
