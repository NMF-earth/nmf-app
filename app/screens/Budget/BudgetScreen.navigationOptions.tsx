import React from "react";

// import { TouchableOpacity } from "react-native";
import { Text } from "../../components";
// import { Ionicons } from "@expo/vector-icons";
// import { Layout as ConstantsLayout } from "/constants";
import { t } from "../../utils";
// import { Colors } from "../../style";
import { Layout, ComponentsStyle } from "../../style";

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitle: null,
  headerTitle: () => (
    <Text.H1 style={Layout.androidNavTitle}>{t("BUDGET_SCREEN_TITLE")}</Text.H1>
  ),
  // headerRight: (
  //   <TouchableOpacity
  //     onPress={() => {
  //       // do nothing.
  //     }}
  //   >
  //     <Ionicons
  //       size={26}
  //       style={{ marginRight: ConstantsLayout.PADDING_HORIZONTAL }}
  //       color={Colors.black}
  //       name={"md-share"}
  //     />
  //   </TouchableOpacity>
  // )
});

export default navigationOptions;
