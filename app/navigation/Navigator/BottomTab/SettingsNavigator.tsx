import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../../screens/Settings";
import AboutScreen from "../../../screens/About";
import SupportUsScreen from "../../../screens/SupportUs";
import MyLocationScreen from "../../../screens/MyLocation";
import FaqScreen from "../../../screens/Faq";
import NotificationsScreen from "../../../screens/Notifications";
import MyData from "../../../screens/MyData";
import StorybookScreen from "../../../../storybook";
import LanguagesScreen from "../../../screens/Languages/LanguagesScreen";

const Stack = createStackNavigator();

const SettingsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      options={SettingsScreen.navigationOptions}
      component={SettingsScreen}
    />
    <Stack.Screen name="About" options={AboutScreen.navigationOptions} component={AboutScreen} />
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
    <Stack.Screen name="Faq" options={FaqScreen.navigationOptions} component={FaqScreen} />
    <Stack.Screen
      name="Notifications"
      options={NotificationsScreen.navigationOptions}
      component={NotificationsScreen}
    />
    <Stack.Screen name="MyData" options={MyData.navigationOptions} component={MyData} />
    <Stack.Screen name="Storybook" component={StorybookScreen} />
    <Stack.Screen
      name="Languages"
      options={LanguagesScreen.navigationOptions}
      component={LanguagesScreen}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
