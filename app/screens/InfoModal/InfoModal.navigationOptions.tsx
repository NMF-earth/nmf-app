import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Layout } from "constant";
import { Text } from "components";
import { platform, t, ui } from "utils";
import { Colors, ComponentsStyle } from "style";
import { navigate } from "navigation";

const iconStyle = { paddingRight: Layout.PADDING_HORIZONTAL };

const navigationOptionsAndroid = ({ route }) => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTitle: () =>
    route.params?.emissionModelType ? (
      <Text.H1>
        {ui.getTranslationModelType(route.params.emissionModelType)}
      </Text.H1>
    ) : (
      <Text.H1>{t("INFO_MODAL_SCREEN_METHODOLOGY")}</Text.H1>
    ),
  headerRight: () => null,
});

const navigationOptionsIOS = ({ navigation, route }) => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
  },
  headerTitle: () =>
    route.params?.emissionModelType ? (
      <Text.H1>
        {ui.getTranslationModelType(route.params.emissionModelType)}
      </Text.H1>
    ) : (
      <Text.H1>{t("INFO_MODAL_SCREEN_METHODOLOGY")}</Text.H1>
    ),
  headerLeft: () => null,
  headerRight: () => (
    <View style={iconStyle}>
      <Ionicons
        name="md-close"
        size={32}
        color={Colors.grey100}
        onPress={() => {
          navigate(navigation).goBack();
        }}
      />
    </View>
  ),
});

const navigationOptions = platform.isAndroid
  ? navigationOptionsAndroid
  : navigationOptionsIOS;

export default navigationOptions;
