import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import styles from "./BudgetScreen.styles";

const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

export default function BudgetScreen(): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          // backgroundColor: "#fff",
          backgroundGradientFrom: "#eee",
          backgroundGradientTo: "#eee",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        hideLegend={false}
      />
    </ScrollView>
  );
}
