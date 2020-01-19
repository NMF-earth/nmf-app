import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import colors from "../../style/colors";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerTintColor: colors.darkLink,
  headerTitle: () => <Text.H1>{t("ADD_EMISSION_TITLE")}</Text.H1>
});

export default navigationOptions;
