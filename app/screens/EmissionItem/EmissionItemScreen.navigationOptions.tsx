import React from "react";

import { Text, InfoButton } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.grey100,
  headerBackTitleVisible: false,
  headerRight: () => <InfoButton />,
  headerTitle: () => <Text.H1>{t("EMISSION_ITEM_SCREEN_TITLE")}</Text.H1>,
});

export default navigationOptions;
