import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Layout, Colors, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.darkLink,
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>
      {t("SUPPORT_US_SCREEN_TITLE")}
    </Text.H1>
  ),
});

export default navigationOptions;
