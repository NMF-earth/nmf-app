import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import colors from "../../style/colors";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerTintColor: colors.darkLink,
  headerBackTitle: null,
  headerTitle: () => <Text.H1>{t("COMING_SOON_TITLE")}</Text.H1>
});

export default navigationOptions;
