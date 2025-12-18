import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import AddEmissionScreen from "../../../screens/AddEmission";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import SubCategorySelectionScreen from "../../../screens/SubCategorySelection";
import BarCodeScanScreen from "../../../screens/BarCodeScan";

const Stack = createStackNavigator();

const AddEmissionNavigator = (): React.ReactElement => (
  <Stack.Navigator id="AddEmissionStack">
    <Stack.Screen
      name="CategorySelection"
      options={CategorySelectionScreen.navigationOptions as StackNavigationOptions}
      component={CategorySelectionScreen}
    />
    <Stack.Screen
      name="SubCategorySelection"
      options={SubCategorySelectionScreen.navigationOptions as StackNavigationOptions}
      component={SubCategorySelectionScreen}
    />
    <Stack.Screen
      name="AddEmission"
      options={AddEmissionScreen.navigationOptions as StackNavigationOptions}
      component={AddEmissionScreen}
    />
    <Stack.Screen
      name="BarCodeScan"
      options={BarCodeScanScreen.navigationOptions as StackNavigationOptions}
      component={BarCodeScanScreen}
    />
  </Stack.Navigator>
);

export default AddEmissionNavigator;
