import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Colors, Font } from "style";

const navigationOptions = ({ route }): NativeStackNavigationOptions => ({
  title: route?.params?.monthAndYear,
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

export default navigationOptions;
