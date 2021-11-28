import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EmissionItemScreen from "../../../screens/EmissionItem";
import EmissionsScreen from "../../../screens/Emissions";
import MonthlyEmissionsScreen from "../../../screens/MonthlyEmissions";
import RecurringEmissionsScreen from "../../../screens/RecurringEmissions";

const Stack = createStackNavigator();

const EmissionsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Emissions"
      options={EmissionsScreen.navigationOptions}
      component={EmissionsScreen}
    />
    <Stack.Screen
      name="EmissionItem"
      options={EmissionItemScreen.navigationOptions}
      component={EmissionItemScreen}
    />
    <Stack.Screen
      name="MonthlyEmissions"
      options={MonthlyEmissionsScreen.navigationOptions}
      component={MonthlyEmissionsScreen}
    />
    <Stack.Screen
      name="RecurringEmissions"
      options={RecurringEmissionsScreen.navigationOptions}
      component={RecurringEmissionsScreen}
    />
  </Stack.Navigator>
);

export default EmissionsNavigator;
