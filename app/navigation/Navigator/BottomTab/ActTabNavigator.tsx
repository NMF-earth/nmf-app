import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Text } from "components";
import { t } from "utils";
import { ComponentsStyle, Colors, Font } from "style";

import { GuideCategory } from "../../../types/guide";
import ActScreen from "../../../screens/Act";

const Tab = createMaterialTopTabNavigator();

const tabs = Object.keys(GuideCategory);

/* TODO: write tests for TopTabBar function */
function TopTabBar({ state, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: Colors.white,
      }}
    >
      {tabs.map((tab, index) => {
        const label = tab;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(tab);
          }
        };

        return (
          <TouchableOpacity key={label} onPress={onPress}>
            <Text.Secondary
              style={{
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 13,
                fontFamily: Font.FontWeight.Bold,
                textTransform: "capitalize",
                color: isFocused ? Colors.black : Colors.grey40,
                backgroundColor: isFocused ? Colors.green10 : Colors.white,
              }}
            >
              {label}
            </Text.Secondary>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ActTabNavigator = () => (
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

ActTabNavigator.navigationOptions = navigationOptions;

export default ActTabNavigator;
