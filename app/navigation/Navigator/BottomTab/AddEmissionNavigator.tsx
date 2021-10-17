import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddEmissionScreen from "../../../screens/AddEmission";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import SubCategorySelectionScreen from "../../../screens/SubCategorySelection";
import BarCodeScanScreen from "../../../screens/BarCodeScan";

const Stack = createStackNavigator();

const AddEmissionNavigator = (): React.ReactElement => (
  <Stack.Navigator>
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
      name="AddEmission"
      options={AddEmissionScreen.navigationOptions}
      component={AddEmissionScreen}
    />
    <Stack.Screen
      name="BarCodeScan"
      options={BarCodeScanScreen.navigationOptions}
      component={BarCodeScanScreen}
    />
  </Stack.Navigator>
);

export default AddEmissionNavigator;
