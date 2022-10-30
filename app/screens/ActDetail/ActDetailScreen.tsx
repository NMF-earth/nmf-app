import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";

import { HTMLImage } from "components";
import { ui } from "utils";
import { NavStatelessComponent } from "interfaces";

import styles from "./ActDetailScreen.styles";
import navigationOptions from "./ActDetailScreen.navigationOptions";

const baseFontStyle = { fontSize: 18 };

const ActDetailScreen: NavStatelessComponent = () => {
  const route = useRoute();

  // TODO : fix me
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { body } = route?.params;
  const contentWidth = useWindowDimensions().width;

  return (
    <ScrollView style={styles.container}>
      <HTML
        source={{ html: body }}
        contentWidth={contentWidth}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={baseFontStyle}
        renderers={{
          img: (attribs) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const [img] = attribs.src.split(".");
            return <HTMLImage uri={img} key={img} />;
          },
        }}
      />
    </ScrollView>
  );
};

ActDetailScreen.navigationOptions = navigationOptions();

export default ActDetailScreen;
