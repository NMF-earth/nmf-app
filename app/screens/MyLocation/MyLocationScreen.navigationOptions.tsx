import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { t } from "utils";
import { Colors, Font } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("MY_LOCATION_SCREEN_TITLE"),
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
