import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ActScreen from "../../../screens/Act";
import ActDetailScreen from "../../../screens/ActDetail";

const Stack = createStackNavigator();

const ActNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Act"
      options={ActScreen.navigationOptions}
      component={ActScreen}
    />
    <Stack.Screen
      name="Details"
      options={ActDetailScreen.navigationOptions}
      component={ActDetailScreen}
    />
  </Stack.Navigator>
);

export default ActNavigator;
