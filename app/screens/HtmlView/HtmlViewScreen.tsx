import React from "react";
import { ScrollView, Linking, GestureResponderEvent } from "react-native";
import HTML from "react-native-render-html";

import styles from "./HtmlViewScreen.styles";
import { HtmlViewPages } from "./HtmlViewPages";
import navigationOptions from "./HtmlView.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";

interface Props {
  page: HtmlViewPages;
}

const HtmlViewScreen = ({page}: Props) => {
  let title: any, html: string;
  switch (page)
  {
    case HtmlViewPages.custom:
      break;
    case HtmlViewPages.electricity:
      break;
    case HtmlViewPages.food:
      break;
    case HtmlViewPages.purchase:
      break;
    case HtmlViewPages.streaming:
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
