import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { userPreferences } from "ducks";

import IntroScreen from "../../screens/Intro";
import BottomTabNavigator from "./BottomTabNavigator";
import { currentTermsOfUseVersion } from "../../constants/Preferences";
import { ComponentsStyle } from "style";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const RootNavigator = (): React.ReactElement => {
  const hasAcceptedTermsOfUseVersion =
    currentTermsOfUseVersion ===
    useSelector(userPreferences.selectors.getAcceptedTermsOfUseVersion);

  return (
    <Stack.Navigator>
      {hasAcceptedTermsOfUseVersion ? (
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={screenOptions}
        />
      ) : (
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={screenOptions}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
