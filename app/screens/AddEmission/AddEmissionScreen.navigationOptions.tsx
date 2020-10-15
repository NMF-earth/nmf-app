import React from "react";

import { Text, EmissionInfoButton } from "../../components";
import { t } from "../../utils";
import { Colors, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerRight: () => <EmissionInfoButton />,
  headerTitle: () => <Text.H1>{t("ADD_EMISSION_TITLE")}</Text.H1>,
});
export default navigationOptions;
