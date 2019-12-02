import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MonoText from "../components/atoms";

import ActScreen from "../screens/Act";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";

import colors from "../style/colors";

import { t } from "../utils/i18n";

const ActStack = createStackNavigator({
  Act: ActScreen
});

ActStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <MonoText style={{ color: focused ? colors.linkGreen : colors.swordGray }}>
      {t("ACT")}
    </MonoText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  )
};

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen
});

BudgetStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <MonoText style={{ color: focused ? colors.linkGreen : colors.swordGray }}>
      {t("BUDGET")}
    </MonoText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <MonoText style={{ color: focused ? colors.linkGreen : colors.swordGray }}>
      {t("SETTINGS")}
    </MonoText>
  ),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand"} />
};

const EmissionsStack = createStackNavigator({
  Emissions: EmissionsScreen
});

EmissionsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <MonoText style={{ color: focused ? colors.linkGreen : colors.swordGray }}>
      {t("EMISSIONS")}
    </MonoText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  )
};

const tabNavigator = createBottomTabNavigator(
  {
    ActStack,
    BudgetStack,
    SettingsStack,
    EmissionsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#EDF7F1",
        borderTopWidth: 0
      }
    }
  }
);

export default tabNavigator;
