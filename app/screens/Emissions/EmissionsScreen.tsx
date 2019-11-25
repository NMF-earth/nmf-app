import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function EmissionsScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

EmissionsScreen.navigationOptions = {
  title: "Emissions"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
