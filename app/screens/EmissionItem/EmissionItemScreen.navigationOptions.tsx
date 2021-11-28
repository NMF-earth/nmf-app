/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { path, includes } from "ramda";
import { FoodType } from "carbon-footprint";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text, InfoButton } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const emissionsInfoAvailable = [FoodType.cheese];

const navigationOptions = (prop): StackNavigationOptions => {
  const emissionModelType = path(["route", "params", "emissionModelType"], prop);
  const showInfoButton = includes(emissionModelType, emissionsInfoAvailable);
  const isRecurringEmission = path(["route", "params", "isRecurringEmission"], prop);

  return {
    ...ComponentsStyle.transitionBetweenScreenPresets,
    headerStyle: {
      ...ComponentsStyle.header,
    },
    headerTintColor: Colors.grey100,
    headerBackTitleVisible: false,
    headerRight: () => (showInfoButton ? <InfoButton /> : null),
    headerTitle: () => (
      <Text.Header>
        {isRecurringEmission
          ? t("EMISSION_ITEM_SCREEN_RECURRING_EMISSION")
          : t("EMISSION_ITEM_SCREEN_EMISSION")}
      </Text.Header>
    ),
  };
};

export default navigationOptions;
