import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { platform } from "utils";
import { Colors, Font } from "style";
import { navigate } from "navigation";


const navigationOptions = ({ navigation }): NativeStackNavigationOptions => ({
  headerTitle: () => null,
  headerTitleAlign: "center",
  headerBackVisible: false,
  headerLeft: () => null,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerRight: platform.isIOS
    ? () => (
      <TouchableOpacity
        onPress={() => {
          navigate(navigation).goBack();
        }}
      >
        <Ionicons name="close" size={32} color={Colors.grey100} />
      </TouchableOpacity>
    )
    : undefined,
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
