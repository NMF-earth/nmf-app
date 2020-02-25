import React from "react";
import { Text } from "../../components";
import { t } from "../../utils";
import { Colors } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerTintColor: Colors.darkLink,
  headerTitle: () => <Text.H1>{t("ADD_EMISSION_TITLE")}</Text.H1>
});

export default navigationOptions;
