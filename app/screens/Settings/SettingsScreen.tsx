import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import ExpoConstants from "expo-constants";
import * as WebBrowser from "expo-web-browser";

import { ImagesAssets } from "constant";
import { Button, Text, SocialMedia } from "components";
import { t } from "utils";
import { navigate } from "navigation";

import { SettingsRow } from "./components";
import styles from "./SettingsScreen.styles";
import navigationOptions from "./SettingsScreen.navigationOptions";

const SettingsScreen = (props) => {
  const navigator = navigate(props.navigation);

  const rowItems = [
    {
      title: t("SETTINGS_SCREEN_ABOUT"),
      onPress: navigator.openAbout,
    },
    {
      title: t("SETTINGS_SCREEN_NOTIFICATIONS"),
      onPress: navigator.openNotifications,
      os: "ios",
    },
    {
      title: t("SETTINGS_SCREEN_MY_LOCATION"),
      onPress: navigator.openMyLocation,
    },
    {
      title: t("SETTINGS_SCREEN_SUPPORT_US"),
      onPress: navigator.openSupportUs,
    },
    {
      title: "NMF.earth",
      onPress: () => WebBrowser.openBrowserAsync("http://nmf.earth"),
    },
    {
      title: t("SETTINGS_SCREEN_ROADMAP"),
      onPress: () =>
        WebBrowser.openBrowserAsync(
          "https://www.notion.so/notmyfault/cb98dacb015f4a18a7ebac5c0319495b?v=da9ec9ce3096417186dfd229a82aa90e"
        ),
    },
    {
      title: t("SETTINGS_SCREEN_FEEDBACK"),
      onPress: () =>
        WebBrowser.openBrowserAsync("https://nmf-earth.typeform.com/to/w0nNSk"),
    },
    {
      title: t("SETTINGS_SCREEN_TERMS_OF_USE"),
      onPress: () =>
        WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf"),
    },
  ];
  const [steps, setSteps] = useState(0);

  return (
    <ScrollView style={styles.container}>
      {rowItems.map((item, index) => {
        if (item.os && item.os !== Platform.OS) {
          return null;
        }
        return (
          <SettingsRow key={index} onPress={item.onPress} title={item.title} />
        );
      })}
      <TouchableWithoutFeedback onPress={() => setSteps(steps + 1)}>
        <View style={styles.logoNMFContainer}>
          <Image
            style={styles.logoNMF}
            resizeMode="contain"
            source={ImagesAssets.logos.nmf}
          />
        </View>
      </TouchableWithoutFeedback>
      <Text.Tertiary bold lightGray style={styles.appVersionTitle}>
        {t("SETTINGS_SCREEN_APP_VERSION", {
          version: ExpoConstants.manifest.version,
        })}
      </Text.Tertiary>
      <SocialMedia />

      {steps > 4 ? (
        <View>
          <Button.Primary
            style={styles.hiddenBtn}
            textType={"Primary"}
            onPress={navigator.openStorybook}
          >
            <Text.Primary white center>
              Open Storybook
            </Text.Primary>
          </Button.Primary>
          <Button.Primary
            black
            style={styles.hiddenBtn}
            textType={"Primary"}
            onPress={() => {
              const date = new Date();
              const timestamp = date.getTime();
              throw new Error("Developer error test: " + timestamp);
            }}
          >
            <Text.Primary white center>
              Crash test
            </Text.Primary>
          </Button.Primary>
        </View>
      ) : null}
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = navigationOptions;

export default SettingsScreen;
