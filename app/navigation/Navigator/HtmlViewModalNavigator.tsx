import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HtmlViewScreen from "../../screens/HtmlView";

const Stack = createStackNavigator();

const HtmlViewModalNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="HtmlView"
      options={HtmlViewScreen.navigationOptions}
      component={HtmlViewScreen}
    />
  </Stack.Navigator>
);

export default HtmlViewModalNavigator;
