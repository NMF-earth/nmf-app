import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerTitle: () => <Text.Header>{t("BAR_CODE_SCAN_SCREEN_TITLE")}</Text.Header>,
});

export default navigationOptions;
