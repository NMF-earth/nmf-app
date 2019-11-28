import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { t } from "../../utils/i18n";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function BudgetScreen(): React.ReactElement {
  return <ScrollView style={styles.container}></ScrollView>;
}

BudgetScreen.navigationOptions = {
  title: t("BUDGET")
};

