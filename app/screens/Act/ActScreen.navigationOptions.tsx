import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { t } from "utils";
import { Font } from "style";

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("ACT_SCREEN_TITLE"),
  headerBackButtonDisplayMode: "minimal",
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
