import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, ComponentsStyle } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { navigate } from "../../navigation";
import { platform } from "../../utils";

const iconStyle = { paddingRight: PADDING_HORIZONTAL };

const navigationOptionsAndroid = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTitle: () => null,
  headerRight: () => null,
});

const navigationOptionsIOS = ({ navigation }) => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
  },
  headerTitle: () => null,
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
