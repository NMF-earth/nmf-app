import React from "react";
import HTML from "react-native-render-html";
import { ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { pathOr } from "ramda";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});

export default class ActDetailScreen extends React.Component {
  static navigationOptions = () => {
    const route = useRoute();
    const title = pathOr("", ["params", "guide", "title"], route);

    return { title };
  };

  render() {
    const route = useRoute();
    const body = pathOr("", ["params", "guide", "body"], route);

    return (
      <ScrollView style={styles.container}>
        <HTML html={body} />
      </ScrollView>
    );
  }
}
