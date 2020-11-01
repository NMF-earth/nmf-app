import React from "react";

import { Text } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerTitle: () => <Text.H1>{t("MY_LOCATION_SCREEN_TITLE")}</Text.H1>,
});

export default navigationOptions;
