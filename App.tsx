import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { FormattedProvider } from "react-native-globalize";
import { locale as localeExpo } from "expo-localization";
import { includes } from "ramda";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import AppNavigator from "./app/navigation/Navigator/AppNavigator";
import store from "./app/redux/store";
import SplashScreen from "./app/screens/Splash";
import { LocalizationContext } from "./app/utils";

const supportedLanguages: string[] = [
  "en",
  "fr",
  "de",
  "sv",
  "da",
  "ru",
  "pt",
  "pl",
];
const defaultLanguage = "en";
const defaultLocale = "en-us";

if (!__DEV__) {
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
}

const App: React.FC<{}> = () => {
  enableScreens();

  let lang = localeExpo.substring(0, 2);

  if (!includes(lang, supportedLanguages)) {
    lang = defaultLanguage;
  }

  const [ready, setReady] = useState(false);
  const [splashAnimation, setSplashAnimation] = useState(__DEV__); // to track splashScreen animation
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
      .catch((error) => Sentry.captureException(error));
  }, []);

  // callback to get splashScreen animation completion
  const screenAnimationComplete = useCallback((animation) => {
    setSplashAnimation(animation);
  }, []);

  let body = <SplashScreen screenAnimationComplete={screenAnimationComplete} />;

  if (ready && splashAnimation) {
    body = (
      <Provider store={store}>
        <FormattedProvider locale={language || defaultLanguage}>
          <LocalizationContext.Provider
            value={{
              locale: locale || defaultLocale,
              setLocale: setLocale,
              language: language || defaultLanguage,
              setLanguage: setLanguage,
            }}
          >
            <AppNavigator />
          </LocalizationContext.Provider>
        </FormattedProvider>
      </Provider>
    );
  } else if (__DEV__) {
    body = <View />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      {body}
    </SafeAreaProvider>
  );
};

export default App;
