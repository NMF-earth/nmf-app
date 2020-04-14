import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import RootStack from "./RootNavigator";
import ModalScreens from "./../Modal/ModalScreens";

export default createAppContainer(
  createStackNavigator(
    {
      Root: {
        screen: RootStack,
        navigationOptions: {
          header: null,
        },
      },
      ...ModalScreens,
    },
    {
      mode: "modal",
    }
  )
);
