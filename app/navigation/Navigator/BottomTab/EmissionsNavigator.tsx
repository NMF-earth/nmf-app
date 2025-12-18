import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import EmissionItemScreen from "../../../screens/EmissionItem";
import EmissionsScreen from "../../../screens/Emissions";
import MonthlyEmissionsScreen from "../../../screens/MonthlyEmissions";
import RecurringEmissionsScreen from "../../../screens/RecurringEmissions";

const Stack = createNativeStackNavigator();

const EmissionsNavigator = (): React.ReactElement => (
  <Stack.Navigator id="EmissionsStack">
    <Stack.Screen
      name="Emissions"
      options={EmissionsScreen.navigationOptions as NativeStackNavigationOptions}
      component={EmissionsScreen}
    />
    <Stack.Screen
      name="EmissionItem"
      options={EmissionItemScreen.navigationOptions as NativeStackNavigationOptions}
      component={EmissionItemScreen}
    />
    <Stack.Screen
      name="MonthlyEmissions"
      options={MonthlyEmissionsScreen.navigationOptions as NativeStackNavigationOptions}
      component={MonthlyEmissionsScreen}
    />
    <Stack.Screen
      name="RecurringEmissions"
      options={RecurringEmissionsScreen.navigationOptions as NativeStackNavigationOptions}
      component={RecurringEmissionsScreen}
    />
  </Stack.Navigator>
);

export default EmissionsNavigator;
