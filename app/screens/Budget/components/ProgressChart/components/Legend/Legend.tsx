import React from "react";
import { View } from "react-native";

import { t } from "utils";
import { Colors } from "style";

import styles from "./Legend.styles";
import LegendItem from "../LegendItem";

interface Props {
  totalEmissions: number;
  foodEmissions: number;
  transportEmissions: number;
  otherEmissions: number;
}

const Legend: React.FC<Props> = ({
  totalEmissions,
  transportEmissions,
  foodEmissions,
  otherEmissions,
}) => {
  const items = [
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TOTAL"),
      value: totalEmissions,
      color: Colors.apricot,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TRANSPORT"),
      value: transportEmissions,
      color: Colors.yellow50,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FOOD"),
      value: foodEmissions,
      color: Colors.green50,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_OTHER"),
      value: otherEmissions,
      color: Colors.grey70,
    },
  ];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem key={index} name={item.name} value={item.value} color={item.color} />
      ))}
    </View>
  );
};

export default Legend;
