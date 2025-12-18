import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { t, platform } from "utils";
import { Text } from "components";
import { Layout, Font } from "style";

const navigationOptions: NativeStackNavigationOptions = {
  title: t("BUDGET_SCREEN_TITLE"),
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
      ? () => <Text.H1 style={Layout.androidNavTitle}>{t("BUDGET_SCREEN_TITLE")}</Text.H1>
      : undefined,
};

export default navigationOptions;
