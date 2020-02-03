import React from "react";
import { View } from "react-native";
import styles from "./Legend.styles";
import LegendItem from "../LegendItem";
import { Colors } from "../../../../../../style";
import { t } from "../../../../../../utils";

interface Prop {
  totalEmissions: number;
  foodEmissions: number;
  transportEmissions: number;
  otherEmissions: number;
}

const Legend = ({
  totalEmissions,
  transportEmissions,
  foodEmissions,
  otherEmissions
}: Prop) => {
  const items = [
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TOTAL"),
      value: totalEmissions,
      color: Colors.apricot
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TRANSPORT"),
      value: transportEmissions,
      color: Colors.mango
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FOOD"),
      value: foodEmissions,
      color: Colors.linkGreen
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_OTHER"),
      value: otherEmissions,
      color: Colors.darkLink70
    }
  ];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem
          key={index}
          name={item.name}
          value={item.value}
          color={item.color}
        />
      ))}
    </View>
  );
};

export default Legend;
