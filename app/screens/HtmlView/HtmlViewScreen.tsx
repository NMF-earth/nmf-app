import React from "react";
import { ScrollView, Linking, GestureResponderEvent } from "react-native";
import HTML from "react-native-render-html";

import styles from "./HtmlViewScreen.styles";
import { EmissionEnum } from "../../interfaces";
import navigationOptions from "./HtmlView.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";

const HtmlViewScreen = ({route}) => {
  const emissionType = route?.params?.emissionType;
  let title: any, html: string;
  switch (emissionType) {
    case EmissionEnum.custom:
      break;
    case EmissionEnum.electricity:
      break;
    case EmissionEnum.food:
      break;
    case EmissionEnum.purchase:
      break;
    case EmissionEnum.streaming:
      break;
    default:
      title = "METHODOLOGY_SCREEN_TITLE"
      html = methodology[0].body
      break;
  }

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={html}
        onLinkPress={(_: GestureResponderEvent, link: string) => {
          Linking.openURL(link);
        }}
        baseFontStyle={{ fontSize: 18 }}
      />
    </ScrollView>
  );
};

HtmlViewScreen.navigationOptions = navigationOptions;

export default HtmlViewScreen;
