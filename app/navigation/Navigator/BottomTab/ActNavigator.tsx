import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import ActTabNavigator from "./ActTabNavigator";
import ActDetailScreen from "../../../screens/ActDetail";

const Stack = createStackNavigator();

const ActNavigator = (): React.ReactElement => (
  <Stack.Navigator id="ActStack">
    <Stack.Screen
      name="ActTabNavigator"
      options={ActTabNavigator.navigationOptions as StackNavigationOptions}
      component={ActTabNavigator}
    />
    <Stack.Screen
      name="ActDetail"
      component={ActDetailScreen}
      options={ActDetailScreen.navigationOptions as StackNavigationOptions}
    />
  </Stack.Navigator>
);

export default ActNavigator;
