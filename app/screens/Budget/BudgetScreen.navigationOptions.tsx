import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { t } from "../../utils/translations";
import colors from "../../style/colors";

const navigationOptions = () => ({
  headerStyle: {
    borderBottomWidth: 0
  },
  headerBackTitle: null,
  headerTitle: () => <Text.H1>{t("BUDGET_SCREEN_TITLE")}</Text.H1>,
  headerRight: (
    <TouchableOpacity
      onPress={() => {
        // do nothing.
      }}
    >
      <Ionicons
        size={26}
        style={{ marginRight: PADDING_HORIZONTAL }}
        color={colors.black}
        name={"md-share"}
      />
    </TouchableOpacity>
  )
});

export default navigationOptions;
