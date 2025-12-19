import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Text } from "components";
import { platform, t } from "utils";
import { Colors, Font, Layout } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("CATEGORY_SELECTION_SCREEN_TITLE"),
  headerLargeTitleEnabled: true,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerLargeTitleStyle: {
    fontFamily: Font.FontWeight.Black,
  },
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Black,
  },
  headerTitle:
    platform.isAndroid
      ? () => <Text.H1 style={Layout.androidNavTitle}>{t("CATEGORY_SELECTION_SCREEN_TITLE")}</Text.H1>
      : undefined,
});

export default navigationOptions;
