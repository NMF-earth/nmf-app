import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle, Colors, Font } from "style";

import { GuideCategory } from "../../../types/guide";
import ActScreen from "../../../screens/Act";

const Tab = createMaterialTopTabNavigator();

const tabs = Object.keys(GuideCategory);

const ActTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      scrollEnabled: true,
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
    {tabs.map((tab) => (
      <Tab.Screen
        key={tab}
        name={tab}
        component={ActScreen}
        options={{ tabBarLabel: tab }}
      />
    ))}
  </Tab.Navigator>
);

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTitle: () => <Text.H1>{t("ACT_SCREEN_TITLE")}</Text.H1>,
});

ActTabNavigator.navigationOptions = navigationOptions;

export default ActTabNavigator;
