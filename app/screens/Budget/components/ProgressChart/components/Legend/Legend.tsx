import React from "react";
import { View } from "react-native";

import { t } from "utils";

import styles from "./Legend.styles";
import LegendItem from "../LegendItem";

interface Props {
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
}

const Legend: React.FC<Props> = ({
  totalEmissions,
  foodEmissions,
  mealEmissions,
  transportEmissions,
  streamingEmissions,
  purchaseEmissions,
  fashionEmissions,
  electricityEmissions,
  productScannedEmissions,
  customEmissions,
}) => {
  const items = [
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FOOD"),
      value: foodEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_MEAL"),
      value: mealEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TRANSPORT"),
      value: transportEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_STREAMING"),
      value: streamingEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_PURCHASE"),
      value: purchaseEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FASHION"),
      value: fashionEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_ELECTRICITY"),
      value: electricityEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_PRODUCT_SCANNED"),
      value: productScannedEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_CUSTOM"),
      value: customEmissions,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TOTAL"),
      value: totalEmissions,
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem key={index} name={item.name} amount={item.value} totalAmount={totalEmissions} />
      ))}
    </View>
  );
};

export default Legend;
