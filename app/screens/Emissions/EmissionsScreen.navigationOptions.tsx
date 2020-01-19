import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerBackTitle: null,
  headerTitle: () => <Text.H1>{t("EMISSIONS_SCREEN_TITLE")}</Text.H1>
});

export default navigationOptions;
