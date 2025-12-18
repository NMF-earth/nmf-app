import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import ComingSoonScreen from "../../screens/ComingSoon";
import PeriodicityModalScreen from "../../screens/Periodicity";
import InfoModalScreen from "../../screens/InfoModal";

const Stack = createStackNavigator();

const ModalNavigator = (): React.ReactElement => (
  <Stack.Navigator id="ModalStack">
    <Stack.Screen
      name="ComingSoonModal"
      options={ComingSoonScreen.navigationOptions as StackNavigationOptions}
      component={ComingSoonScreen}
    />
    <Stack.Screen
      name="PeriodicityModal"
      options={PeriodicityModalScreen.navigationOptions as StackNavigationOptions}
      component={PeriodicityModalScreen}
    />
    <Stack.Screen
      name="InfoModal"
      options={InfoModalScreen.navigationOptions as StackNavigationOptions}
      component={InfoModalScreen}
    />
  </Stack.Navigator>
);

export default ModalNavigator;
