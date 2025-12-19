import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Text, InfoButton } from "components";
import { t } from "utils";
import { Colors } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerRight: () => <InfoButton />,
  headerTitle: () => <Text.Header>{t("ADD_EMISSION_SCREEN_TITLE")}</Text.Header>,
});

export default navigationOptions;
