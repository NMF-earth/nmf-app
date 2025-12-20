/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React from "react";
import { path, includes } from "ramda";
import { FoodType } from "carbon-footprint";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { InfoButton } from "components";
import { t } from "utils";
import { Colors, Font } from "style";

const emissionsInfoAvailable = [FoodType.cheese];

const navigationOptions = (prop): NativeStackNavigationOptions => {
  const emissionModelType = path(["route", "params", "emissionModelType"], prop);
  const showInfoButton = includes(emissionModelType, emissionsInfoAvailable);
  const isRecurringEmission = path(["route", "params", "isRecurringEmission"], prop);

  return {
    title: isRecurringEmission
      ? t("EMISSION_ITEM_SCREEN_RECURRING_EMISSION")
      : t("EMISSION_ITEM_SCREEN_EMISSION"),
    headerTitleAlign: "center",
    headerBackButtonDisplayMode: "minimal",
    headerTintColor: Colors.grey100,
    headerRight: () => (showInfoButton ? <InfoButton /> : null),
    headerTitleStyle: {
      fontFamily: Font.FontWeight.Bold,
      fontSize: Font.FontSize.Header,
    },
  };
};

export default navigationOptions;
