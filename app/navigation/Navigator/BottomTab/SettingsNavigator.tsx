import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../../screens/Settings";
import AboutScreen from "../../../screens/About";
import SupportUsScreen from "../../../screens/SupportUs";
import MyLocationScreen from "../../../screens/MyLocation";
import NotificationsScreen from "../../../screens/Notifications";
import StorybookScreen from "../../../../storybook";

const Stack = createStackNavigator();

const SettingsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      options={SettingsScreen.navigationOptions}
      component={SettingsScreen}
    />
    <Stack.Screen
      name="About"
      options={AboutScreen.navigationOptions}
      component={AboutScreen}
    />
    <Stack.Screen
      name="SupportUs"
      options={SupportUsScreen.navigationOptions}
      component={SupportUsScreen}
    />
    <Stack.Screen
      name="MyLocation"
      options={MyLocationScreen.navigationOptions}
      component={MyLocationScreen}
    />
    <Stack.Screen
      name="Notifications"
      options={NotificationsScreen.navigationOptions}
      component={NotificationsScreen}
    />
    <Stack.Screen name="Storybook" component={StorybookScreen} />
  </Stack.Navigator>
);

export default SettingsNavigator;
