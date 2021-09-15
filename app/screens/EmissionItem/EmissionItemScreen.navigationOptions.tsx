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

  return {
    ...ComponentsStyle.transitionBetweenScreenPresets,
    headerStyle: {
      ...ComponentsStyle.header,
    },
    headerTintColor: Colors.grey100,
    headerBackTitleVisible: false,
    headerRight: () => (showInfoButton ? <InfoButton /> : null),
    headerTitle: () => <Text.Header>{t("EMISSION_ITEM_SCREEN_TITLE")}</Text.Header>,
  };
};

export default navigationOptions;
