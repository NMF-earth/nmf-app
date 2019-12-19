/**
 * Navigation options for the about nordnet view
 *
 * https://reactnavigation.org/docs/navigators/stack
 */

import React from "react";
import { Text } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { t } from "../../utils/translations";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerTitle: () => <Text.H1>{t("BUDGET_SCREEN_TITLE")}</Text.H1>,
  headerRight: (
    <Ionicons
      size={26}
      style={{ marginRight: PADDING_HORIZONTAL }}
      color="black"
      name={"md-share"}
    />
  )
});

export default navigationOptions;
