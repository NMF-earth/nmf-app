import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { FormattedNumber } from "react-native-globalize";

import { Text } from "components";
import { userPreferences } from "ducks";
import { calculation } from "utils";

import styles from "./LegendItem.styles";

interface Props {
  name: string;
  amount: number;
  totalAmount: number;
}

const LegendItem: React.FC<Props> = ({ name = "", amount = 0, totalAmount = 0 }) => {
  const useMetricUnits = useSelector(userPreferences.selectors.getUseMetricUnits);
  const getDisplayUnitsValue = calculation.getDisplayUnitsValue;
  const getDisplayUnits = calculation.getDisplayUnits;

  if (amount === 0 || totalAmount === 0) {
    return null;
  }

  let showPercentage = true;
  let unitAmount = ` ${getDisplayUnits(amount, useMetricUnits)} - `;

  const percentage = Math.round((amount / totalAmount) * 100);

  if (totalAmount == amount || !percentage) {
    showPercentage = false;
    unitAmount = ` ${getDisplayUnits(amount, useMetricUnits)}`;
  }

  return (
    <View style={styles.container}>
      <Text.Secondary>{name + " : "}</Text.Secondary>
      <Text.Secondary lightGray>
        <FormattedNumber
          maximumFractionDigits={1}
          value={getDisplayUnitsValue(amount, useMetricUnits)}
        />{" "}
        {unitAmount}
      </Text.Secondary>
      {showPercentage && <Text.Secondary lightGray>{percentage + " %"}</Text.Secondary>}
    </View>
  );
};

export default LegendItem;
