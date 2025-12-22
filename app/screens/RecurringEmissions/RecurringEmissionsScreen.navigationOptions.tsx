import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { t } from "utils";
import { Colors, Font } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("RECURRING_EMISSIONS_SCREEN_TITLE"),
  headerTintColor: Colors.grey100,
  headerBackButtonDisplayMode: "minimal",
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
