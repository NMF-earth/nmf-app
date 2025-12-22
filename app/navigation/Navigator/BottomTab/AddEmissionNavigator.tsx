import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import AddEmissionScreen from "../../../screens/AddEmission";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import SubCategorySelectionScreen from "../../../screens/SubCategorySelection";
import BarCodeScanScreen from "../../../screens/BarCodeScan";

const Stack = createNativeStackNavigator();

const AddEmissionNavigator = (): React.ReactElement => (
  <Stack.Navigator id="AddEmissionStack">
    <Stack.Screen
      name="CategorySelection"
      options={CategorySelectionScreen.navigationOptions as NativeStackNavigationOptions}
      component={CategorySelectionScreen}
    />
    <Stack.Screen
      name="SubCategorySelection"
      options={SubCategorySelectionScreen.navigationOptions as NativeStackNavigationOptions}
      component={SubCategorySelectionScreen}
    />
    <Stack.Screen
      name="AddEmission"
      options={AddEmissionScreen.navigationOptions as NativeStackNavigationOptions}
      component={AddEmissionScreen}
    />
    <Stack.Screen
      name="BarCodeScan"
      options={BarCodeScanScreen.navigationOptions as NativeStackNavigationOptions}
      component={BarCodeScanScreen}
    />
  </Stack.Navigator>
);

export default AddEmissionNavigator;
