import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Colors, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.darkLink,
  headerBackTitle: null,
  headerTitle: () => <Text.H1>{t("EMISSION_ITEM_TITLE")}</Text.H1>,
});

export default navigationOptions;
