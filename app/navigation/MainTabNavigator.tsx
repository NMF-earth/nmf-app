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

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const ActStack = createStackNavigator(
  {
    Act: ActScreen
  },
  config
);

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

ActStack.path = "act";

const BudgetStack = createStackNavigator(
  {
    Budget: BudgetScreen
  },
  config
);

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

BudgetStack.path = "budget";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <MonoText style={{ color: focused ? colors.linkGreen : colors.swordGray }}>
      {t("SETTINGS")}
    </MonoText>
  ),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand"} />
};

SettingsStack.path = "settings";

const EmissionsStack = createStackNavigator(
  {
    Emissions: EmissionsScreen
  },
  config
);

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

EmissionsStack.path = "emissions";

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

tabNavigator.path = "";

export default tabNavigator;
