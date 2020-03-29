import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Shadows } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0,
    ...Shadows.header
  },
  headerBackTitle: null,
  headerTitle: () => <Text.H1>{t("ACT_SCREEN_TITLE")}</Text.H1>
});

export default navigationOptions;
