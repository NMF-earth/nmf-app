import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import ActTabNavigator from "./ActTabNavigator";
import ActDetailScreen from "../../../screens/ActDetail";

const Stack = createNativeStackNavigator();

const ActNavigator = (): React.ReactElement => (
  <Stack.Navigator id="ActStack">
    <Stack.Screen
      name="ActTabNavigator"
      options={ActTabNavigator.navigationOptions as NativeStackNavigationOptions}
      component={ActTabNavigator}
    />
    <Stack.Screen
      name="ActDetail"
      component={ActDetailScreen}
      options={ActDetailScreen.navigationOptions as NativeStackNavigationOptions}
    />
  </Stack.Navigator>
);

export default ActNavigator;
