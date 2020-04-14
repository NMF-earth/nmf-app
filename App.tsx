import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { FormattedProvider } from "react-native-globalize";
import { locale as localeExpo } from "expo-localization";
import { includes } from "ramda";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { Provider } from "react-redux";
import AppNavigator from "./app/navigation/Navigator/AppNavigator";
import store from "./app/redux/store";
import { LocalizationContext } from "./app/utils";

const supportedLanguages = ["en", "fr", "de", "sv"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

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

export default class App extends React.Component<Props, State> {
  setLanguage = null;
  setLocale = null;

  constructor(props: Props) {
    super(props);

    const locale = localeExpo;
    let language = localeExpo.substring(0, 2);

    if (!includes(language, supportedLanguages)) {
      language = "en";
    }

    this.setLanguage = (language) =>
      this.setState({
        language,
      });

    this.setLocale = (locale) =>
      this.setState({
        locale,
      });

    this.state = {
      locale,
      language,
      setLocale: () => this.setLocale,
      setLanguage: () => this.setLanguage,
      isLoadingComplete: false,
    };
  }
  componentDidCatch(error: Error) {
    /* TODO: add more params for better error reporting */
    Sentry.captureException(error);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() =>
            handleFinishLoading(() => {
              this.setState({ isLoadingComplete: true });
            })
          }
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <Provider store={store}>
            <FormattedProvider locale={this.state.language || "en"}>
              <LocalizationContext.Provider
                value={{
                  locale: this.state.locale || "en-US",
                  setLocale: this.state.setLocale,
                  language: this.state.language || "en",
                  setLanguage: this.state.setLanguage,
                }}
              >
                <AppNavigator />
              </LocalizationContext.Provider>
            </FormattedProvider>
          </Provider>
        </View>
      );
    }
  }
}

async function loadResourcesAsync() {
  await Promise.all([
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
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
