import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { Preferences } from "constant";
import { userPreferences } from "ducks";

import IntroScreen from "../../screens/Intro";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigator = (): React.ReactElement => {
  const hasAcceptedTermsOfUseVersion =
    Preferences.currentTermsOfUseVersion ===
    useSelector(userPreferences.selectors.getAcceptedTermsOfUseVersion);

  return (
    <Stack.Navigator id="RootStack">
      {hasAcceptedTermsOfUseVersion ? (
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={screenOptions} />
      ) : (
        <Stack.Screen name="Intro" component={IntroScreen} options={screenOptions} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
