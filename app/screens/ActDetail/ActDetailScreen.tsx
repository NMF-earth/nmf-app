import React from "react";
import HTML from "react-native-render-html";
import { ScrollView, StyleSheet } from "react-native";
import { NavigationState } from "react-navigation";

interface Props {
  navigation: {
    state: NavigationState;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});

export default class ActDetailScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.state.params.guide.title;
    return { title }
  }

  render() {
    const guide = this.props.navigation.state.params.guide;
    return (
      <ScrollView style={styles.container}>
        <HTML html={guide.body} />
      </ScrollView>
    );
  }
}
