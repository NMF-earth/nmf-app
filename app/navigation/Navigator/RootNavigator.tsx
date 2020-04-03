import { createSwitchNavigator } from "react-navigation";

import IntroScreen from "../../screens/Intro";
import MainTabStack from "./MainTabNavigator";

const RootStack = createSwitchNavigator(
  {
    Intro: IntroScreen,
    MainTab: MainTabStack
  },
  {
    initialRouteName: "Intro"
  }
);

export default RootStack;
