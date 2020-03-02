import React from "react";
import * as WebBrowser from "expo-web-browser";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { Text } from "../../components";
import styles from "./AboutScreen.styles";
import navigationOptions from "./AboutScreen.navigationOptions";
import { t } from "../../utils";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text.Primary style={styles.header}>
        {t("ABOUT_SCREEN_INTRO")}
      </Text.Primary>
      <Text.H2 style={styles.header}>{t("ABOUT_SCREEN_CARE_HEADER")}</Text.H2>
      <Text.H3 style={styles.subHeader}>{t("ABOUT_SCREEN_PRIVACY")}</Text.H3>
      <Text.Primary>{t("ABOUT_SCREEN_PRIVACY_BODY")}</Text.Primary>
      <Text.H3 style={styles.subHeader}>{t("ABOUT_SCREEN_ETHIC")}</Text.H3>
      <Text.Primary>{t("ABOUT_SCREEN_ETHIC_BODY")}</Text.Primary>
      <Text.H3 style={styles.subHeader}>
        {t("ABOUT_SCREEN_OPEN_SOURCE")}
      </Text.H3>
      <Text.Primary>{t("ABOUT_SCREEN_OPEN_SOURCE_BODY")}</Text.Primary>
      <Text.H2 style={styles.header}>
        {t("ABOUT_SCREEN_LIBRARIES_AND_CONTRIBUTORS")}
      </Text.H2>
      <TouchableOpacity
        style={styles.githubBtn}
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://github.com/NotMyFaultEarth/nmf-app"
          )
        }
      >
        <Text.Primary>{t("ABOUT_SCREEN_CAN_BE_FOUND")}</Text.Primary>
        <Text.Primary green>{t("ABOUT_SCREEN_GITHUB")}</Text.Primary>
      </TouchableOpacity>
      <View style={styles.separator} />
    </ScrollView>
  );
};

AboutScreen.navigationOptions = navigationOptions;

export default AboutScreen;
