import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import { Text } from "../components";
import StorybookScreen from "../../storybook";

import ActScreen from "../screens/Act";
import EmissionItemScreen from "../screens/EmissionItem";
import ActDetailScreen from "../screens/ActDetail";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";
import MontlyBudgetScreen from "../screens/MonthlyBudget";
import AddEmissionScreen from "../screens/AddEmission";

import { Colors } from "../style";
import { t } from "../utils";

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen,
  MontlyBudget: MontlyBudgetScreen
});

BudgetStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? Colors.linkGreen : Colors.swordGray
      }}
    >
      {t("BUDGET_SCREEN_TAB_NAME")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  )
};

const EmissionsStack = createStackNavigator({
  Emissions: EmissionsScreen,
  EmissionItem: EmissionItemScreen,
  AddEmission: AddEmissionScreen
});

EmissionsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? Colors.linkGreen : Colors.swordGray
      }}
    >
      {t("EMISSIONS_SCREEN_TAB_NAME")}
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
        color: focused ? Colors.linkGreen : Colors.swordGray
      }}
    >
      {t("ACT_SCREEN_TAB_NAME")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand"} />
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Storybook: StorybookScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? Colors.linkGreen : Colors.swordGray
      }}
    >
      {t("SETTINGS_SCREEN_TAB_NAME")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  )
};

const MainTabNavigator = createBottomTabNavigator(
  {
    BudgetStack,
    EmissionsStack,
    // ActStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: 6,
        backgroundColor: Colors.linkGreen + "15",
        borderTopWidth: 0
      }
    }
  }
);

export default MainTabNavigator;
