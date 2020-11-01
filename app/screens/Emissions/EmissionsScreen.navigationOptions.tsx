import React from "react";

import { Text } from "components";
import { t } from "utils";
import { Layout, ComponentsStyle } from "style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>
      {t("EMISSIONS_SCREEN_TITLE")}
    </Text.H1>
  ),
});

export default navigationOptions;
