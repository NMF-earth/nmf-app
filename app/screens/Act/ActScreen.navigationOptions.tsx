import React from "react";

import { t } from "utils";

import { ComponentsStyle } from "style";

import { Text } from "../../components";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTitle: () => <Text.H1>{t("ACT_SCREEN_TITLE")}</Text.H1>,
});

export default navigationOptions;
