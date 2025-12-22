import React from "react";
import { createNativeBottomTabNavigator, type NativeBottomTabNavigationOptions } from "@react-navigation/bottom-tabs/unstable";

import { t } from "utils";
import { Colors } from "style";

import ActNavigator from "./BottomTab/ActNavigator";
import BudgetNavigator from "./BottomTab/BudgetNavigator";
import EmissionsNavigator from "./BottomTab/EmissionsNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";
import AddEmissionNavigator from "./BottomTab/AddEmissionNavigator";

const BottomTab = createNativeBottomTabNavigator();

const BudgetOptions: NativeBottomTabNavigationOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: { type: "image", source: require("../../../assets/images/tabs/budget.png") },
};

const EmissionsOptions: NativeBottomTabNavigationOptions = {
  tabBarLabel: t("EMISSIONS_SCREEN_TAB_NAME"),
  tabBarIcon: { type: "image", source: require("../../../assets/images/tabs/emissions.png") },
};

const ActOptions: NativeBottomTabNavigationOptions = {
  tabBarLabel: t("ACT_SCREEN_TAB_NAME"),
  tabBarIcon: { type: "image", source: require("../../../assets/images/tabs/act.png") },
};

const SettingsOptions: NativeBottomTabNavigationOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: { type: "image", source: require("../../../assets/images/tabs/settings.png") },
};

const AddEmissionOptions: NativeBottomTabNavigationOptions = {
  tabBarLabel: t("ADD_EMISSION_SCREEN_TAB_NAME"),
  tabBarIcon: { type: "image", source: require("../../../assets/images/tabs/add.png") },
};

const BottomTabNavigator = (): React.ReactElement => {
  return (
    <BottomTab.Navigator
      id="BottomTab"
      initialRouteName={"EmissionsNavigator"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black50,
        tabBarLabelVisibilityMode: "labeled",
      }}
    >
      <BottomTab.Screen
        name="BudgetNavigator"
        options={BudgetOptions}
        component={BudgetNavigator}
      />
      <BottomTab.Screen
        name="EmissionsNavigator"
        options={EmissionsOptions}
        component={EmissionsNavigator}
      />
      <BottomTab.Screen
        name="AddEmissionNavigator"
        options={AddEmissionOptions}
        component={AddEmissionNavigator}
      />
      {__DEV__ && (
        <BottomTab.Screen name="Act" options={ActOptions} component={ActNavigator} />
      )}
      <BottomTab.Screen
        name="SettingsNavigator"
        options={SettingsOptions}
        component={SettingsNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

