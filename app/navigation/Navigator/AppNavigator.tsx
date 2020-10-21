import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ModalNavigator from "./ModalNavigator";
import InfoModalNavigator from "./InfoModalNavigator";
import RootNavigator from "./RootNavigator";
import ComingSoonScreen from "../../screens/ComingSoon";

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
          name="ComingSoon"
          options={ComingSoonScreen.navigationOptions}
          component={ModalNavigator}
        />
        <AppStack.Screen
          name="InfoModal"
          options={{ headerShown: false }}
          component={InfoModalNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
