import React from "react";
import { ScrollView } from "react-native";
import HTML from "react-native-render-html";

import styles from "./HtmlViewScreen.styles";
import { EmissionEnum } from "../../interfaces";
import navigationOptions from "./HtmlView.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";
import { ui } from "../../utils";

const HtmlViewScreen = ({ route }) => {
  const emissionType = route?.params?.emissionType;
  let html: string;
  switch (emissionType) {
    case EmissionEnum.custom:
      html = "<h2> Custom Placeholder </h2>";
      break;
    case EmissionEnum.electricity:
      html = "<h2> Electricity Placeholder </h2>";
      break;
    case EmissionEnum.food:
      html = "<h2> Food Placeholder </h2>";
      break;
    case EmissionEnum.streaming:
      html = "<h2> Streaming Placeholder </h2>";
      break;
    default:
      html = methodology[0].body;
      break;
  }

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={html}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={{ fontSize: 18 }}
      />
    </ScrollView>
  );
};

HtmlViewScreen.navigationOptions = navigationOptions;

export default HtmlViewScreen;
