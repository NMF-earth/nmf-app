import React from "react";
import { Dimensions, ScrollView } from "react-native";
import HTML from "react-native-render-html";

import { HTMLImage } from "components";
import { ui } from "utils";

import styles from "./ActDetailScreen.styles";
import navigationOptions from "./ActDetailScreen.navigationOptions";

const baseFontStyle = { fontSize: 18 };

const ActDetailScreen = (props) => {
  const { body } = props?.route?.params;

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={body}
        imagesMaxWidth={Dimensions.get("window").width}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={baseFontStyle}
        renderers={{
          img: (attribs) => {
            const [img] = attribs.src.split(".");
            return <HTMLImage uri={img} key={img} />;
          },
        }}
      />
    </ScrollView>
  );
};

ActDetailScreen.navigationOptions = navigationOptions;

export default ActDetailScreen;
