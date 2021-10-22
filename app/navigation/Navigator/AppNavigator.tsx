import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ModalNavigator from "./ModalNavigator";
import RootNavigator from "./RootNavigator";

const AppStack = createStackNavigator();

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal">
        <AppStack.Screen
          name="AppStack"
          options={{ headerShown: false }}
          component={RootNavigator}
        />
        <AppStack.Screen
          name="ModalNavigator"
          options={{ headerShown: false }}
          component={ModalNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
