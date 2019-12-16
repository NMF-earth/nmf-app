import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import { Text } from "../components";

import ActScreen from "../screens/Act";
import ActDetailScreen from "../screens/ActDetail";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";

import colors from "../style/colors";
import { t } from "../utils/translations";

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen
});

BudgetStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
      }}
    >
      {t("BUDGET")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  )
};

const EmissionsStack = createStackNavigator({
  Emissions: EmissionsScreen
});

EmissionsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
      }}
    >
      {t("EMISSIONS")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats"} />
  )
};

const ActStack = createStackNavigator({
  Act: ActScreen,
  Details: ActDetailScreen
});

ActStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
      }}
    >
      {t("ACT")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand"} />
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
      }}
    >
      {t("SETTINGS")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  )
};

const tabNavigator = createBottomTabNavigator(
  {
    BudgetStack,
    EmissionsStack,
    ActStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: colors.linkGreen + "15",
        borderTopWidth: 0
      }
    }
  }
);

export default tabNavigator;
