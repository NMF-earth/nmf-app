import React from "react";
import { ScrollView, View } from "react-native";

import { Text, SocialMedia, StickersImage } from "components";
import { t } from "utils";
import { NavStatelessComponent } from "interfaces";

import styles from "./ComingSoonScreen.styles";
import navigationOptions from "./ComingSoonScreen.navigationOptions";

const ComingSoonScreen: NavStatelessComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <StickersImage sticker="bike" />
      <View style={styles.textView}>
        <Text.Primary style={styles.paragraph}>
          {t("COMING_SOON_SCREEN_UNDER_DEVELOPMENT")}
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("COMING_SOON_SCREEN_START_FOLLOW_US")}
        </Text.Primary>
      </View>
      <SocialMedia />
    </ScrollView>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ComingSoonScreen.navigationOptions = navigationOptions;

export default ComingSoonScreen;
