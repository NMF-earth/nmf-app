import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import PeriodicityModalScreen from "../../screens/Periodicity";

const Stack = createStackNavigator();

const PeriodicityModalNavigator = (): React.ReactElement => (
  <Stack.Navigator id="PeriodicityModalStack">
    <Stack.Screen
      name="PeriodicityModal"
      options={PeriodicityModalScreen.navigationOptions as StackNavigationOptions}
      component={PeriodicityModalScreen}
    />
  </Stack.Navigator>
);

export default PeriodicityModalNavigator;
