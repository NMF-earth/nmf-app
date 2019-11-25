import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
