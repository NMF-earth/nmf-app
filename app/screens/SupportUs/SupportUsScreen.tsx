import React from "react";
import { ScrollView, View } from "react-native";

import { Text, StickersImage } from "components";

import styles from "./SupportUsScreen.styles";
import { t } from "../../utils";
import navigationOptions from "./SupportUsScreen.navigationOptions";

const SupportUsScreen = () => (
  <ScrollView style={styles.container}>
    <StickersImage sticker="restaurant" />
    <Text.H2 style={styles.title}>
      {t("SUPPORT_US_SCREEN_WHY_DONATE_TITLE")}
    </Text.H2>
    <Text.Primary style={styles.paragraph}>
      {t("SUPPORT_US_SCREEN_WHY_DONATE_CONTENT")}
    </Text.Primary>
    <Text.Primary style={styles.paragraph}>
      {t("SUPPORT_US_SCREEN_TITLE_CONSIDER_DONATE")}
    </Text.Primary>
    <Text.Primary style={styles.paragraph}>
      {t("SUPPORT_US_SCREEN_PLATFORM")}
    </Text.Primary>
    <Text.Link url="https://www.patreon.com/nmf_earth" style={styles.paragraph}>
      Patreon
    </Text.Link>
    <Text.Link
      url="https://opencollective.com/nmf_earth"
      style={styles.paragraph}
    >
      Open Collective
    </Text.Link>
    <View style={styles.separator} />
  </ScrollView>
);

SupportUsScreen.navigationOptions = navigationOptions;

export default SupportUsScreen;
