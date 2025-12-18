import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import InfoModalScreen from "../../screens/InfoModal";

const Stack = createStackNavigator();

const InfoModalNavigator = (): React.ReactElement => (
  <Stack.Navigator id="InfoModalStack">
    <Stack.Screen
      name="InfoModal"
      options={InfoModalScreen.navigationOptions as StackNavigationOptions}
      component={InfoModalScreen}
    />
  </Stack.Navigator>
);

export default InfoModalNavigator;
