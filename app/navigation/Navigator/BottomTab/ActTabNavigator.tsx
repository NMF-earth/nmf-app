import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Text } from "../../../components";
import { t } from "../../../utils";
import { ComponentsStyle, Colors, Font } from "../../../style";

import ActScreen from "../../../screens/Act";
import ActDetailScreen from "../../../screens/ActDetail";

const Tab = createMaterialTopTabNavigator();

const ActTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: Colors.green50,
      inactiveTintColor: Colors.grey40,
      indicatorStyle: { backgroundColor: Colors.green50 },
      labelStyle: {
        fontSize: Font.FontSize.Secondary,
        fontFamily: Font.FontWeight.Bold,
      },
      style: { backgroundColor: Colors.white },
    }}
  >
    <Tab.Screen
      name="Feed"
      component={ActScreen}
      options={{ tabBarLabel: "House" }}
    />
    <Tab.Screen
      name="Notifications"
      component={ActDetailScreen}
      options={{ tabBarLabel: "Tech" }}
    />
    <Tab.Screen
      name="Profile"
      component={ActScreen}
      options={{ tabBarLabel: "Food" }}
    />
  </Tab.Navigator>
);

const navigationOptions = () => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTitle: () => <Text.H1>{t("ACT_SCREEN_TITLE")}</Text.H1>,
});

ActTabNavigator.navigationOptions = navigationOptions;

export default ActTabNavigator;
