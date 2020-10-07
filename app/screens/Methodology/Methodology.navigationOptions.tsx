import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, ComponentsStyle } from "../../style";
import { Layout } from "constant";
import { navigate } from "../../navigation";
import { platform, t } from "../../utils";
import { Text } from "../../components";

const iconStyle = { paddingRight: Layout.PADDING_HORIZONTAL };

const navigationOptionsAndroid = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTitle: () => <Text.H1>{t("METHODOLOGY_SCREEN_TITLE")}</Text.H1>,
  headerRight: () => null,
});

const navigationOptionsIOS = ({ navigation }) => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
  },
  headerTitle: () => <Text.H1>{t("METHODOLOGY_SCREEN_TITLE")}</Text.H1>,
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
