import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import ComingSoonScreen from "../../screens/ComingSoon";
import PeriodicityModalScreen from "../../screens/Periodicity";
import InfoModalScreen from "../../screens/InfoModal";

const Stack = createNativeStackNavigator();

const ModalNavigator = (): React.ReactElement => (
  <Stack.Navigator id="ModalStack">
    <Stack.Screen
      name="ComingSoonModal"
      options={ComingSoonScreen.navigationOptions as NativeStackNavigationOptions}
      component={ComingSoonScreen}
    />
    <Stack.Screen
      name="PeriodicityModal"
      options={PeriodicityModalScreen.navigationOptions as NativeStackNavigationOptions}
      component={PeriodicityModalScreen}
    />
    <Stack.Screen
      name="InfoModal"
      options={InfoModalScreen.navigationOptions as NativeStackNavigationOptions}
      component={InfoModalScreen}
    />
  </Stack.Navigator>
);

export default ModalNavigator;
