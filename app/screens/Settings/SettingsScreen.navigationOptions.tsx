import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Text } from "components";
import { platform, t } from "utils";
import { Font, Layout } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("SETTINGS_SCREEN_TITLE"),
  headerLargeTitleEnabled: true,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerLargeTitleStyle: {
    fontFamily: Font.FontWeight.Black,
  },
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Black,
  },
  headerTitle:
    platform.isAndroid
      ? () => <Text.H1 style={Layout.androidNavTitle}>{t("SETTINGS_SCREEN_TITLE")}</Text.H1>
      : undefined,
});

export default navigationOptions;
