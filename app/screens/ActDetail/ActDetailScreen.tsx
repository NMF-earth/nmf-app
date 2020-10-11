import React from "react";
import {
  Dimensions,
  ScrollView,
  Linking,
  GestureResponderEvent,
} from "react-native";
import HTML from "react-native-render-html";

import { HTMLImage } from "../../components";
import styles from "./ActDetailScreen.styles";
import navigationOptions from "./ActDetailScreen.navigationOptions";

const ActDetailScreen = (props) => {
  const { body } = props?.route?.params;

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={body}
        imagesMaxWidth={Dimensions.get("window").width}
        onLinkPress={(_: GestureResponderEvent, link: string) => {
          Linking.openURL(link);
        }}
        baseFontStyle={{ fontSize: 18 }}
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
