import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import IntroScreen from "../screens/Intro";

export default createAppContainer(
  createSwitchNavigator(
    {
      Intro: IntroScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Intro"
    }
  )
);
