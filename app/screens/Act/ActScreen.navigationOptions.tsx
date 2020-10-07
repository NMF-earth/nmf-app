import React from "react";

import { t } from "utils";

import { Text } from "../../components";
import { ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTitle: () => <Text.H1>{t("ACT_SCREEN_TITLE")}</Text.H1>,
});

export default navigationOptions;
