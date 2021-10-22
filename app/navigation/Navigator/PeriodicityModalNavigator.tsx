import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PeriodicityModalScreen from "../../screens/Periodicity";

const Stack = createStackNavigator();

const PeriodicityModalNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="PeriodicityModal"
      options={PeriodicityModalScreen.navigationOptions}
      component={PeriodicityModalScreen}
    />
  </Stack.Navigator>
);

export default PeriodicityModalNavigator;
