import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { userPreferences } from "../../ducks";
import IntroScreen from "../../screens/Intro";
import BottomTabNavigator from "./BottomTabNavigator";
import { currentTermsOfUseVersion } from "../../constants/Preferences";

const Stack = createStackNavigator();

const RootNavigator = (): React.ReactElement => {
  const hasAcceptedTermsOfUseVersion =
    currentTermsOfUseVersion ===
    useSelector(userPreferences.selectors.getAcceptedTermsOfUseVersion);

  return (
    <Stack.Navigator initialRouteName="Intro">
      {hasAcceptedTermsOfUseVersion ? (
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
