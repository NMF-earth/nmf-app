import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../../components/TabBarIcon";
import StorybookScreen from "../../../storybook";

import ActScreen from "../../screens/Act";
import EmissionItemScreen from "../../screens/EmissionItem";
import ActDetailScreen from "../../screens/ActDetail";
import BudgetScreen from "../../screens/Budget";
import EmissionsScreen from "../../screens/Emissions";
import SettingsScreen from "../../screens/Settings";
import MontlyBudgetScreen from "../../screens/MonthlyBudget";
import AddEmissionScreen from "../../screens/AddEmission";
import AboutScreen from "../../screens/About";
import SupportUsScreen from "../../screens/SupportUs";

import { Colors } from "../../style";
import { t } from "../../utils";

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen,
  MontlyBudget: MontlyBudgetScreen,
});

BudgetStack.navigationOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  ),
};

const EmissionsStack = createStackNavigator({
  Emissions: EmissionsScreen,
  EmissionItem: EmissionItemScreen,
  AddEmission: AddEmissionScreen,
});

EmissionsStack.navigationOptions = {
  tabBarLabel: t("EMISSIONS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats"} />
  ),
};

const ActStack = createStackNavigator({
  Act: ActScreen,
  Details: ActDetailScreen,
});

ActStack.navigationOptions = {
  tabBarLabel: t("ACT_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-hand"} />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  About: AboutScreen,
  SupportUs: SupportUsScreen,
  Storybook: StorybookScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  ),
};

const MainTabNavigator = createBottomTabNavigator(
  {
    BudgetStack,
    EmissionsStack,
    // ActStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.linkGreen,
      inactiveTintColor: Colors.swordGray,
      style: {
        paddingTop: 6,
        backgroundColor: Colors.linkGreen + "15",
        borderTopWidth: 0,
      },
    },
  }
);

export default MainTabNavigator;
