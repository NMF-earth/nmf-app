import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { GlobalizeProvider } from "react-native-globalize";
import { locale as localeExpo } from "expo-localization";
import { includes } from "ramda";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ExpoClientConfig from "expo-constants";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import { LocalizationContext } from "utils";
import StoreReviewChecker from "components/StoreReviewChecker";

import { loadGlobalize } from "./i18";
import AppNavigator from "./app/navigation/Navigator/AppNavigator";
import store from "./app/redux/store";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://cccb51ebcb7a465a8b8c56621b68c2cb@o326365.ingest.us.sentry.io/1833935',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

const supportedLanguages: string[] = [
  "en",
  "fr",
  "de",
  "cs",
  "sv",
  "da",
  "ru",
  "pt",
  "pl",
  "zh",
  "ms",
  "es",
  "it",
  "ar",
];
const defaultLanguage = "en";
const defaultLocale = "en-us";

loadGlobalize();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const release = ExpoClientConfig.revisionId || "0.0.0";

if (!__DEV__) {
  /* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
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
