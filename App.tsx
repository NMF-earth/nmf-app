import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { GlobalizeProvider } from "react-native-globalize";
import { locale as localeExpo } from "expo-localization";
import { includes } from "ramda";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// eslint-disable-next-line import/no-named-as-default
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import { LocalizationContext } from "utils";
import StoreReviewChecker from "components/StoreReviewChecker";

import { loadGlobalize } from "./i18";
import AppNavigator from "./app/navigation/Navigator/AppNavigator";
import store from "./app/redux/store";

const supportedLanguages: string[] = [
  "en",
  "fr",
  "de",
  "sv",
  "da",
  "ru",
  "pt",
  "pl",
  "zh",
  "ms",
  "es",
];
const defaultLanguage = "en";
const defaultLocale = "en-us";

loadGlobalize();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const release = Constants.manifest.revisionId || "0.0.0";

if (!__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const secret = require("./secret.ts").default || require("./secret.example.ts").default;

  /* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
  Sentry.init({
    dsn: secret.dsn,
    enableInExpoDevelopment: false,
    debug: true,
    release,
  });
}

const App: React.FC = () => {
  enableScreens();

  let lang = localeExpo.substring(0, 2);

  if (!includes(lang, supportedLanguages)) {
    lang = defaultLanguage;
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
        "Inter-Light-BETA": require("./assets/fonts/Inter-Light-BETA.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
      }),
    ])
      .then(() => {
        setReady(true);
      })
      .catch((error) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Sentry.captureException(error);
      });
  }, []);

  let body = <View />;

  if (ready) {
    body = (
      <Provider store={store}>
        <GlobalizeProvider locale={language || defaultLanguage}>
          <LocalizationContext.Provider
            value={{
              locale: locale || defaultLocale,
              setLocale: setLocale,
              language: language || defaultLanguage,
              setLanguage: setLanguage,
            }}
          >
            {__DEV__ ? (
              <AppNavigator />
            ) : (
              <StoreReviewChecker>
                <AppNavigator />
              </StoreReviewChecker>
            )}
          </LocalizationContext.Provider>
        </GlobalizeProvider>
      </Provider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {body}
    </SafeAreaProvider>
  );
};

export default App;
