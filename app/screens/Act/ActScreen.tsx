import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { t } from "../../utils/translations";
import TabbedView from "../../components/TabbedView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function ActScreen(): React.ReactElement {
  return <ScrollView style={styles.container}>
    <TabbedView 
      items={[
        { title: "Habits", component: <Text>Habits</Text> },
        { title: "Food", component: <Text>Food</Text> }
      ]}
    />
  </ScrollView>;
}

ActScreen.navigationOptions = {
  title: t("ACT")
};
