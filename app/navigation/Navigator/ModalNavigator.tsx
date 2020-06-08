import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ComingSoonScreen from "../../screens/ComingSoon";

const Stack = createStackNavigator();

const ModalNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="ComingSoon"
      options={ComingSoonScreen.navigationOptions}
      component={ComingSoonScreen}
    />
  </Stack.Navigator>
);

export default ModalNavigator;
