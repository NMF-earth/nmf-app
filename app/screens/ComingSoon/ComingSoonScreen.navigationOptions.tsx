import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, ComponentsStyle } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { navigate } from "../../navigation";

const iconStyle = { paddingRight: PADDING_HORIZONTAL };

const navigationOptions = ({ navigation }) => ({
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
        color={Colors.darkLink}
        onPress={() => {
          navigate(navigation).goBack();
        }}
      />
    </View>
  ),
});

export default navigationOptions;
