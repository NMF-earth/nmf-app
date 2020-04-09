import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Layout } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>
      {t("EMISSIONS_SCREEN_TITLE")}
    </Text.H1>
  ),
});

export default navigationOptions;
