import React from "react";
import { ScrollView, Linking, GestureResponderEvent } from "react-native";
import HTML from "react-native-render-html";

import styles from "./MethodologyScreen.styles";
import navigationOptions from "./Methodology.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";

const MethodologyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HTML
        html={methodology[0].body}
        onLinkPress={(_: GestureResponderEvent, link: string) => {
          Linking.openURL(link);
        }}
        baseFontStyle={{ fontSize: 18 }}
      />
    </ScrollView>
  );
};

MethodologyScreen.navigationOptions = navigationOptions;

export default MethodologyScreen;
