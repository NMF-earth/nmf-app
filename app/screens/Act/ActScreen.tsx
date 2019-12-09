import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { t } from "../../utils/translations";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function ActScreen(): React.ReactElement {
  return <ScrollView style={styles.container}></ScrollView>;
}

ActScreen.navigationOptions = {
  title: t("ACT")
};
