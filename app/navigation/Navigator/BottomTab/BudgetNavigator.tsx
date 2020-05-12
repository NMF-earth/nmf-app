import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabBarIcon from "../../../components/TabBarIcon";
import { t } from "../../../utils";

import BudgetScreen from "../../../screens/Budget";
import MontlyBudgetScreen from "../../../screens/MonthlyBudget";

const Stack = createStackNavigator();

const BudgetNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Budget"
      options={BudgetScreen.navigationOptions}
      component={BudgetScreen}
    />
    <Stack.Screen name="MonthlyBudget" component={MontlyBudgetScreen} />
  </Stack.Navigator>
);

export default BudgetNavigator;
