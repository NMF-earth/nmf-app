import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActTabNavigator from "./ActTabNavigator";

const Stack = createStackNavigator();

const ActNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="ActTabNavigator"
      options={ActTabNavigator.navigationOptions}
      component={ActTabNavigator}
    />
  </Stack.Navigator>
);

export default ActNavigator;
