
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { platform, t } from "utils";
import { Colors, Font } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("SETTINGS_SCREEN_TITLE"),
  headerLargeTitleEnabled: true,
  headerTransparent: platform.isIOS,
  headerBlurEffect: platform.isIOS26OrLater() ? undefined : "regular",
  headerTitleAlign: "center",
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerLargeTitleStyle: {
    fontFamily: Font.FontWeight.Black,
  },
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
