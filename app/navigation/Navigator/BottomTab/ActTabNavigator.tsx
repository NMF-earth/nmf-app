import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle, Colors, Font } from "style";
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
                backgroundColor: isFocused ? Colors.green10 : Colors.white,
              },
            ]}
            key={label}
            onPress={onPress}
          >
            <Text.Secondary
              style={[
                styles.tab,
                {
                  color: isFocused ? Colors.black : Colors.grey40,
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
  <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
    {tabs.map((tab) => (
      <Tab.Screen key={tab} name={tab} component={ActScreen} options={{ tabBarLabel: tab }} />
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

ActTabNavigator.navigationOptions = navigationOptions();

export default ActTabNavigator;
