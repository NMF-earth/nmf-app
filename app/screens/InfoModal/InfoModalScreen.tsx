import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";

import { ui } from "utils";
import { NavStatelessComponent } from "interfaces";
import { Layout } from "constant";
import { Colors } from "style";

import styles from "./InfoModalScreen.styles";
import navigationOptions from "./InfoModal.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";
import emissionInfo from "../../../assets/emission-info/emission-info.json";

const InfoModalScreen: NavStatelessComponent = () => {
  const linkStyle = StyleSheet.create({
    a: {
      color: Colors.primary,
      textDecorationLine: "underline",
    },
  });
  const route = useRoute();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const emissionModelType = route?.params?.emissionModelType;
  let html: string;

  if (emissionModelType) {
    const htmlContent = emissionInfo.find((item) => item?.key === emissionModelType);

    html = htmlContent ? htmlContent?.body : `<h2> ${emissionModelType} placeholder </h2>`;
  } else {
    html = methodology[0].body;
  }

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <HTML
        source={{ html }}
        contentWidth={Layout.screen.width}
        baseStyle={styles.text}
        tagsStyles={linkStyle}
        renderersProps={{
          a: {
            onPress: ui.onHTMLBodyLinkPress,
          },
        }}
      />
    </ScrollView>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoModalScreen.navigationOptions = navigationOptions;

export default InfoModalScreen;
