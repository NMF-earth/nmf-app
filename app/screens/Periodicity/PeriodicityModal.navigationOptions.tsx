import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Layout } from "constant";
import { Text } from "components";
import { platform, t } from "utils";
import { Colors, ComponentsStyle } from "style";
import { navigate } from "navigation";

const iconStyle = { paddingRight: Layout.PADDING_HORIZONTAL };

const navigationOptionsAndroid = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTitle: () => <Text.H1>{t("PERIODICITY_MODAL_SCREEN_TITLE")}</Text.H1>,
  headerRight: () => null,
});

const navigationOptionsIOS = ({ navigation }): StackNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
  },
  headerTitle: () => <Text.H1>{t("PERIODICITY_MODAL_SCREEN_TITLE")}</Text.H1>,
  headerLeft: () => null,
  headerRight: () => (
    <TouchableOpacity style={iconStyle} onPress={() => navigate(navigation).goBack()}>
      <Ionicons name="close" size={32} color={Colors.grey100} />
    </TouchableOpacity>
  ),
});

const navigationOptions = platform.isAndroid ? navigationOptionsAndroid : navigationOptionsIOS;

export default navigationOptions;
