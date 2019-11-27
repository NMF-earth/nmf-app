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

export default function SettingsScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

SettingsScreen.navigationOptions = {
  title: t("settings")
};

