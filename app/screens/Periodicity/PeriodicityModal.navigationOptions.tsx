import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { platform, t } from "utils";
import { Colors, Font } from "style";
import { navigate } from "navigation";


const navigationOptions = ({ navigation }): NativeStackNavigationOptions => ({
  title: t("PERIODICITY_MODAL_SCREEN_TITLE"),
  headerTitleAlign: "center",
  headerBackVisible: false,
  headerLeft: () => null,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerRight: () => (
    <TouchableOpacity onPress={() => navigate(navigation).goBack()}>
      <Ionicons name="close" size={32} color={Colors.grey100} />
    </TouchableOpacity>
  ),
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
  headerTintColor: Colors.grey100,
});

export default navigationOptions;
