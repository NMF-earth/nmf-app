import React from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";
import AppNavigator from "./app/navigation/AppNavigator";

const secret =
  require("./secret.ts").default || require("./secret.example.ts").default;

/* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
Sentry.init({
  dsn: secret.dsn,
  enableInExpoDevelopment: false,
  debug: true
});

/* TODO: set Constants.manifest.revisionId with expo */
Sentry.setRelease(Constants.manifest.revisionId);

interface IProps {
  skipLoadingScreen: boolean;
}
interface IState {
  isLoadingComplete: boolean;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoadingComplete: false
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
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
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
      "Inter-ThinItalic-BETA": require("./assets/fonts/Inter-ThinItalic-BETA.ttf")
    })
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
