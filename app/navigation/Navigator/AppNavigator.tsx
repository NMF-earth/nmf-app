import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ModalNavigator from "./ModalNavigator";
import RootNavigator from "./RootNavigator";

const AppStack = createStackNavigator();

const App = (): React.ReactElement => (
  <NavigationContainer>
    <AppStack.Navigator mode="modal">
      <AppStack.Screen
        name="AppStack"
        component={RootNavigator}
        options={{ headerShown: false }}
      />
      <AppStack.Screen name="CominSoon" component={ModalNavigator} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default App;
