import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EmissionItemScreen from "../../../screens/EmissionItem";
import EmissionsScreen from "../../../screens/Emissions";
import AddEmissionScreen from "../../../screens/AddEmission";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import SubCategorySelectionScreen from "../../../screens/SubCategorySelection";
import MonthlyEmissionsScreen from "../../../screens/MonthlyEmissions";

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
      name="AddEmission"
      options={AddEmissionScreen.navigationOptions}
      component={AddEmissionScreen}
    />
    <Stack.Screen
      name="CategorySelection"
      options={CategorySelectionScreen.navigationOptions}
      component={CategorySelectionScreen}
    />
    <Stack.Screen
      name="SubCategorySelection"
      options={SubCategorySelectionScreen.navigationOptions}
      component={SubCategorySelectionScreen}
    />
    <Stack.Screen
      name="MonthlyEmissions"
      options={MonthlyEmissionsScreen.navigationOptions}
      component={MonthlyEmissionsScreen}
    />
  </Stack.Navigator>
);

export default EmissionsNavigator;
