import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { platform, t, ui } from "utils";
import { Colors, Font } from "style";
import { navigate } from "navigation";


const navigationOptions = ({ navigation, route }): NativeStackNavigationOptions => ({
  title: route.params?.emissionModelType
    ? ui.getTranslationEmissionModelType(route.params.emissionModelType)
    : t("INFO_MODAL_SCREEN_METHODOLOGY"),
  headerBackVisible: false,
  headerLeft: () => null,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        navigate(navigation).goBack();
      }}
    >
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
