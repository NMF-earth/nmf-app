import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";
import AppNavigator from "./app/navigation/AppNavigator";

const secret = require("./secret.ts").default || require("./secret.example.ts").default;

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
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
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
