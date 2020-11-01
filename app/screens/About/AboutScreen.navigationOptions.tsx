import React from "react";

import { Text } from "components";
import { t } from "utils";
import { Layout, Colors, ComponentsStyle } from "style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.grey100,
  headerBackTitleVisible: false,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>{t("ABOUT_SCREEN_TITLE")}</Text.H1>
  ),
});

export default navigationOptions;
