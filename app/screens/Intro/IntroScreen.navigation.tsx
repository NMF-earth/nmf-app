import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Layout, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>
      {t("INTRO_SCREEN_WELCOME")}
    </Text.H1>
  ),
});

export default navigationOptions;
