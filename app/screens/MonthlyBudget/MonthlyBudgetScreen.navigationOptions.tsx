import React from "react";
import { Text } from "../../components";
import { t } from "../../utils/translations";
import colors from "../../style/colors";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerTintColor: colors.darkLink,
  headerTitle: () => <Text.H1>{t("MONTHLY_BUDGET_TITLE")}</Text.H1>
});

export default navigationOptions;
