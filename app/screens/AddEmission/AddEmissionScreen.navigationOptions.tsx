import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { InfoButton } from "components";
import { t } from "utils";
import { Colors, Font } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("ADD_EMISSION_SCREEN_TITLE"),
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerRight: () => <InfoButton />,
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
