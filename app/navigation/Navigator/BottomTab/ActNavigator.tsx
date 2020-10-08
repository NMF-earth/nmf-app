import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ActTabNavigator from "./ActTabNavigator";
import ActDetailScreen from "../../../screens/ActDetail";

const Stack = createStackNavigator();

const ActNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="ActTabNavigator"
      options={ActTabNavigator.navigationOptions}
      component={ActTabNavigator}
    />
    <Stack.Screen
      name="ActDetail"
      component={ActDetailScreen}
      options={ActDetailScreen.navigationOptions}
    />
  </Stack.Navigator>
);

export default ActNavigator;
