import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function ActScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

ActScreen.navigationOptions = {
  title: "Act"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
