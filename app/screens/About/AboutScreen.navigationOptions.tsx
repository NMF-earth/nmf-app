import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Layout } from "../../style";
import { Colors } from "../../style";

const navigationOptions = () => ({
  headerTintColor: Colors.darkLink,
  headerStyle: {
    borderBottomWidth: 0
  },
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>
      {t("SETTINGS_SCREEN_TITLE")}
    </Text.H1>
  )
});

export default navigationOptions;
