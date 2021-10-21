import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ComingSoonScreen from "../../screens/ComingSoon";
import PeriodicityModalScreen from "../../screens/Periodicity";

const Stack = createStackNavigator();

const ModalNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="ComingSoon"
      options={ComingSoonScreen.navigationOptions}
      component={ComingSoonScreen}
    />
    <Stack.Screen
      name="PeriodicityModal"
      options={PeriodicityModalScreen.navigationOptions}
      component={PeriodicityModalScreen}
    />
  </Stack.Navigator>
);

export default ModalNavigator;
