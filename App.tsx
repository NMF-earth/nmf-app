import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FormattedProvider } from "react-native-globalize";
import { locale as localeExpo } from "expo-localization";
import { includes } from "ramda";
import { StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { Provider } from "react-redux";
import AppNavigator from "./app/navigation/Navigator/AppNavigator";
import store from "./app/redux/store";
import { LocalizationContext } from "./app/utils";

const supportedLanguages = ["en", "fr", "de", "sv"];

const secret =
  require("./secret.ts").default || require("./secret.example.ts").default;

/* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
Sentry.init({
  dsn: secret.dsn,
  enableInExpoDevelopment: false,
  debug: true,
});

/* TODO: set Constants.manifest.revisionId with expo */
Sentry.setRelease(Constants.manifest.revisionId);

interface Props {
  skipLoadingScreen: boolean;
}
interface State {
  locale: string;
  language: string;
  setLanguage: (language: string) => void;
  setLocale: (locale: string) => void;
  isLoadingComplete: boolean;
}

const App = () => {
  let lang = localeExpo.substring(0, 2);
  if (!includes(lang, supportedLanguages)) {
    lang = "en";
  }

  const [ready, setReady] = useState(false);
  const [language, setLanguage] = useState(lang);
  const [locale, setLocale] = useState(localeExpo);

  useEffect(() => {
    Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-BoldItalic": require("./assets/fonts/Inter-BoldItalic.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
        "Inter-ExtraBoldItalic": require("./assets/fonts/Inter-ExtraBoldItalic.ttf"),
        "Inter-ExtraLight-BETA": require("./assets/fonts/Inter-ExtraLight-BETA.ttf"),
        "Inter-ExtraLightItalic-BETA": require("./assets/fonts/Inter-ExtraLightItalic-BETA.ttf"),
        "Inter-Italic": require("./assets/fonts/Inter-Italic.ttf"),
        "Inter-Light-BETA": require("./assets/fonts/Inter-Light-BETA.ttf"),
        "Inter-LightItalic-BETA": require("./assets/fonts/Inter-LightItalic-BETA.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-MediumItalic": require("./assets/fonts/Inter-MediumItalic.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-SemiBoldItalic": require("./assets/fonts/Inter-SemiBoldItalic.ttf"),
        "Inter-Thin-BETA": require("./assets/fonts/Inter-Thin-BETA.ttf"),
        "Inter-ThinItalic-BETA": require("./assets/fonts/Inter-ThinItalic-BETA.ttf"),
      }),
    ])
      .then(() => setReady(true))
      .catch((error) => Sentry.captureException(error));
  }, []);

  return (
    <>
      {ready ? (
        <Provider store={store}>
          <FormattedProvider locale={language || "en"}>
            <LocalizationContext.Provider
              value={{
                locale: locale || "en-US",
                setLocale: setLocale,
                language: language || "en",
                setLanguage: setLanguage,
              }}
            >
              <AppNavigator />
            </LocalizationContext.Provider>
          </FormattedProvider>
        </Provider>
      ) : (
        <View />
      )}
    </>
  );
};

export default App;
