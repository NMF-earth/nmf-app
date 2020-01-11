import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import { Text } from "../components";

import ComingSoonScreen from "../screens/ComingSoon";
import ActScreen from "../screens/Act";
import ActDetailScreen from "../screens/ActDetail";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";
import MontlyBudgetScreen from "../screens/MonthlyBudget";
import StorybookScreen from "../../storybook";

import colors from "../style/colors";
import { t } from "../utils/translations";

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen,
  MontlyBudget: MontlyBudgetScreen
});

BudgetStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
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
  ComingSoon: ComingSoonScreen
});

EmissionsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{
        textAlign: "center",
        color: focused ? colors.linkGreen : colors.swordGray
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
        color: focused ? colors.linkGreen : colors.swordGray
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
        color: focused ? colors.linkGreen : colors.swordGray
      }}
    >
      {t("SETTINGS_SCREEN_TAB_NAME")}
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
        paddingTop: 6,
        backgroundColor: colors.linkGreen + "15",
        borderTopWidth: 0
      }
    }
  }
);

export default tabNavigator;
