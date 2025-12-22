import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import SettingsScreen from "../../../screens/Settings";
import AboutScreen from "../../../screens/About";
import SupportUsScreen from "../../../screens/SupportUs";
import MyLocationScreen from "../../../screens/MyLocation";
import FaqScreen from "../../../screens/Faq";
import NotificationsScreen from "../../../screens/Notifications";
import MyData from "../../../screens/MyData";
import LanguagesScreen from "../../../screens/Languages/LanguagesScreen";

const Stack = createNativeStackNavigator();

const SettingsNavigator = (): React.ReactElement => (
  <Stack.Navigator id="SettingsStack">
    <Stack.Screen
      name="Settings"
      options={SettingsScreen.navigationOptions as NativeStackNavigationOptions}
      component={SettingsScreen}
    />
    <Stack.Screen name="About" options={AboutScreen.navigationOptions as NativeStackNavigationOptions} component={AboutScreen} />
    <Stack.Screen
      name="SupportUs"
      options={SupportUsScreen.navigationOptions as NativeStackNavigationOptions}
      component={SupportUsScreen}
    />
    <Stack.Screen
      name="MyLocation"
      options={MyLocationScreen.navigationOptions as NativeStackNavigationOptions}
      component={MyLocationScreen}
    />
    <Stack.Screen name="Faq" options={FaqScreen.navigationOptions as NativeStackNavigationOptions} component={FaqScreen} />
    <Stack.Screen
      name="Notifications"
      options={NotificationsScreen.navigationOptions as NativeStackNavigationOptions}
      component={NotificationsScreen}
    />
    <Stack.Screen name="MyData" options={MyData.navigationOptions as NativeStackNavigationOptions} component={MyData} />
    <Stack.Screen
      name="Languages"
      options={LanguagesScreen.navigationOptions as NativeStackNavigationOptions}
      component={LanguagesScreen}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
