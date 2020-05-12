import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../../style";

import TabBarIcon from "../../components/TabBarIcon";
import { t } from "../../utils";

// import ActNavigator from "./BottomTab/ActNavigator";
import BudgetNavigator from "./BottomTab/BudgetNavigator";
import EmissionsNavigator from "./BottomTab/EmissionsNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  ),
};

const EmissionsOptions = {
  tabBarLabel: t("EMISSIONS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats"} />
  ),
};

// const ActOptions = {
//   tabBarLabel: t("ACT_SCREEN_TAB_NAME"),
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={"md-hand"} />
//   ),
// };

const SettingsOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  ),
};

const MainTabNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.linkGreen,
      inactiveTintColor: Colors.swordGray,
      style: {
        paddingTop: 6,
        backgroundColor: Colors.linkGreen + "15",
        borderTopWidth: 0,
      },
    }}
    // screenOptions={TabBarVisibleOnRootScreenOptions}
    // initialRouteName={initialTabRoute}
    // tabBar={(props) => <HomeBottomNavigation {...props} />}
  >
    <BottomTab.Screen
      name="Budget"
      options={BudgetOptions}
      component={BudgetNavigator}
    />
    <BottomTab.Screen
      name="EmissionsNavigator"
      options={EmissionsOptions}
      component={EmissionsNavigator}
    />
    {/* <BottomTab.Screen name="Act" options={ActOptions} component={ActNavigator} /> */}
    <BottomTab.Screen
      options={SettingsOptions}
      name="SettingsNavigator"
      component={SettingsNavigator}
    />
  </BottomTab.Navigator>
);

export default MainTabNavigator;
