import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function BudgetScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

BudgetScreen.navigationOptions = {
  title: "Budget"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
