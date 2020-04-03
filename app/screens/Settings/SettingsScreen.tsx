import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import { Button, Text, SocialMedia } from "../../components";
import { SettingsRow } from "./components";
import * as WebBrowser from "expo-web-browser";
import styles from "./SettingsScreen.styles";
import navigationOptions from "./SettingsScreen.navigationOptions";
import { t } from "../../utils";
import ImagesAssets from "../../constants/ImagesAssets";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const SettingsScreen = ({ navigation }: Props) => {
  const rowItems = [
    {
      title: t("SETTINGS_SCREEN_ABOUT"),
      onPress: () => navigation.push("About")
    },
    {
      title: t("SETTINGS_SCREEN_SUPPORT_US"),
      onPress: () => navigation.push("SupportUs")
    },
    {
      title: t("SETTINGS_SCREEN_NMF_EARTH"),
      onPress: () => WebBrowser.openBrowserAsync("http://nmf.earth")
    },
    {
      title: t("SETTINGS_SCREEN_ROADMAP"),
      onPress: () =>
        WebBrowser.openBrowserAsync(
          "https://www.notion.so/notmyfault/cb98dacb015f4a18a7ebac5c0319495b?v=da9ec9ce3096417186dfd229a82aa90e"
        )
    },
    {
      title: t("SETTINGS_SCREEN_FEEDBACK"),
      onPress: () =>
        WebBrowser.openBrowserAsync("https://nmf-earth.typeform.com/to/w0nNSk")
    },
    {
      title: t("SETTINGS_SCREEN_TERMS_OF_USE"),
      onPress: () =>
        WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf")
    }
  ];
  const [steps, setSteps] = useState(0);

  return (
    <ScrollView style={styles.container}>
      {rowItems.map((item, index) => (
        <SettingsRow key={index} onPress={item.onPress} title={item.title} />
      ))}
      <TouchableOpacity
        onPress={() => setSteps(steps + 1)}
        style={styles.logoNMFContainer}
      >
        <Image
          style={styles.logoNMF}
          resizeMode="contain"
          source={ImagesAssets.logos.nmf}
        />
      </TouchableOpacity>
      <Text.Tertiary bold lightGray style={styles.appVersionTitle}>
        {t("SETTINGS_SCREEN_APP_VERSION", {
          version: Constants.manifest.version
        })}
      </Text.Tertiary>
      <SocialMedia />

      {steps > 4 ? (
        <View>
          <Button.Primary
            style={styles.hiddenBtn}
            textType={"Primary"}
            onPress={() => navigation.push("Storybook")}
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
              throw new Error("Developer error test");
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
