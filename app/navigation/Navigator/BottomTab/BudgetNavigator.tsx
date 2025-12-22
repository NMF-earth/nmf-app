import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import BudgetScreen from "../../../screens/Budget";
import MontlyBudgetScreen from "../../../screens/MonthlyBudget";
import AddEmissionScreen from "../../../screens/AddEmission";

const Stack = createNativeStackNavigator();

const BudgetNavigator = (): React.ReactElement => (
  <Stack.Navigator id="BudgetStack">
    <Stack.Screen
      name="Budget"
      options={BudgetScreen.navigationOptions as NativeStackNavigationOptions}
      component={BudgetScreen}
    />
    <Stack.Screen
      name="MonthlyBudget"
      options={MontlyBudgetScreen.navigationOptions as NativeStackNavigationOptions}
      component={MontlyBudgetScreen}
    />
    <Stack.Screen
      name="AddEmission"
      options={AddEmissionScreen.navigationOptions as NativeStackNavigationOptions}
      component={AddEmissionScreen}
    />
  </Stack.Navigator>
);

export default BudgetNavigator;
