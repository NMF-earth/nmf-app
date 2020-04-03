import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Colors, Shadows } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0,
    ...Shadows.header
  },
  headerTintColor: Colors.darkLink,
  headerTitle: () => <Text.H1>{t("MONTHLY_BUDGET_TITLE")}</Text.H1>
});

export default navigationOptions;
