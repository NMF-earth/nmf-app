import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Text } from "components";
import { t } from "utils";
import { Colors, Font } from "style";
import { NavStatelessComponent } from "interfaces";

import { GuideCategory } from "../../../types/guide";
import ActScreen from "../../../screens/Act";

const Tab = createMaterialTopTabNavigator();

const tabs = Object.keys(GuideCategory);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontFamily: Font.FontWeight.Bold,
    textTransform: "capitalize",
  },
  tabView: {
    borderRadius: 10,
  },
});

/* TODO: write tests for TopTabBar function */
const TopTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => {
        const label = tab;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(tab);
          }
        };

        return (
          <TouchableOpacity
            style={[
              styles.tabView,
              {
                backgroundColor: isFocused ? Colors.primary10 : Colors.white,
              },
            ]}
            key={label}
            onPress={onPress}
          >
            <Text.Secondary
              style={[
                styles.tab,
                {
                  color: isFocused ? Colors.black : Colors.black50,
                },
              ]}
            >
              {label}
            </Text.Secondary>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ActTabNavigator: NavStatelessComponent = () => (
  <Tab.Navigator id="ActTab" tabBar={(props) => <TopTabBar {...props} />}>
    {tabs.map((tab) => (
      <Tab.Screen key={tab} name={tab} component={ActScreen} options={{ tabBarLabel: tab }} />
    ))}
  </Tab.Navigator>
);

const navigationOptions = (): NativeStackNavigationOptions => ({
  title: t("ACT_SCREEN_TITLE"),
  headerTitleAlign: "center",
  headerBackButtonDisplayMode: "minimal",
  headerTintColor: Colors.grey100,
  headerTitleStyle: {
    fontFamily: Font.FontWeight.Bold,
    fontSize: Font.FontSize.Header,
  },
});

ActTabNavigator.navigationOptions = navigationOptions();

export default ActTabNavigator;
