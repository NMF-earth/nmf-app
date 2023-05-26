import React, { useState } from "react";
import { View, TouchableWithoutFeedback, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpoConstants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useDispatch , useSelector } from "react-redux";

import { ImagesAssets } from "constant";
import { Button, Text, SocialMedia, ListItem, ListItemSwitch } from "components";
import { t, platform } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { userPreferences } from "ducks";

import styles from "./SettingsScreen.styles";
import navigationOptions from "./SettingsScreen.navigationOptions";
import quotes from "../../../assets/quotes/quotes.json";




const quoteIndex = Math.floor(Math.random() * Math.floor(quotes.length));

const SettingsScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const dispatch = useDispatch();


  const rowItems = [
    {
      title: t("SETTINGS_SCREEN_ABOUT"),
      onPress: navigator.openAbout,
    },
    {
      isSwitchItem: true,
      title: t("SETTINGS_SCREEN_UNITS"),
      value: useSelector(userPreferences.selectors.getUseMetricUnits),
      get onChange() {return () => {
        dispatch(userPreferences.actions.toggleUnits(!this.value))
      }}
    },
    {
      title: t("SETTINGS_SCREEN_IMPORT_SAVE_DELETE_DATA"),
      onPress: navigator.openMyData,
    },
    {
      title: t("SETTINGS_SCREEN_NOTIFICATIONS"),
      onPress: navigator.openNotifications,
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
      title: t("SETTINGS_SCREEN_FAQ"),
      onPress: navigator.openFaq,
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
      title: t("SETTINGS_SCREEN_HELP_TRANSLATION"),
      onPress: () => Linking.openURL("https://poeditor.com/join/project?hash=0MbginCsWp"),
    },
    {
      title: t("SETTINGS_SCREEN_FEEDBACK"),
      onPress: () => WebBrowser.openBrowserAsync("https://forms.gle/6eXztW8tMJAorJsR6"),
    },
    {
      title: t("SETTINGS_SCREEN_TERMS_OF_USE"),
      onPress: () => WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf"),
    },
  ];

  if (__DEV__) {
    rowItems.push({
      title: t("SETTINGS_SCREEN_LANGUAGES"),
      onPress: navigator.openLanguages,
    });
  }

  const [steps, setSteps] = useState(0);
  const { version, ios, android } = ExpoConstants.manifest;
  const buildNumber = platform.isIOS ? ios.buildNumber : android.versionCode; 

  return (
    <ScrollView style={styles.container}>
      {rowItems.map((item, index) => {
        if (item.isSwitchItem) {
          return <ListItemSwitch
            key={index}
            showBottomLine={index !== rowItems.length - 1}
            value={item.value}
            onChange={item.onChange}
            title={item.title}
          />
        } else {
          return <ListItem
            key={index}
            showBottomLine={index !== rowItems.length - 1}
            onPress={() => item.onPress()}
            title={item.title}
          />
        }
      })}
      <TouchableWithoutFeedback onPress={() => setSteps(steps + 1)}>
        <View style={styles.logoNMFContainer}>
          <Image style={styles.logoNMF} resizeMode="contain" source={ImagesAssets.logos.nmf} />
        </View>
      </TouchableWithoutFeedback>

      <Text.Tertiary bold lightGray style={styles.appVersionTitle}>
        {t("SETTINGS_SCREEN_APP_VERSION", { version }) + "-" + buildNumber}
      </Text.Tertiary>

      <SocialMedia />

      {!__DEV__ && (
        <View style={styles.textContainer}>
          <Text.Secondary darkGray center style={styles.quote}>
            {quotes[quoteIndex].quote}
          </Text.Secondary>
          <Text.Primary bold center style={styles.author}>
            {quotes[quoteIndex].author}
          </Text.Primary>
        </View>
      )}

      {steps > 4 ? (
        <View>
          <Button.Primary
            fullWidth
            style={styles.hiddenBtn}
            text={"Open Storybook"}
            onPress={navigator.openStorybook}
          />
          <Button.Danger
            fullWidth
            style={styles.hiddenBtn}
            text={"Crash test"}
            onPress={() => {
              const date = new Date();
              const timestamp = date.getTime();
              throw new Error("Developer error test: " + timestamp);
            }}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
