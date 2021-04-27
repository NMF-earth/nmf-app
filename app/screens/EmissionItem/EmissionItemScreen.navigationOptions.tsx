import React from "react";
import { path, includes } from "ramda";
import { FoodType } from "carbon-footprint";

import { Text, InfoButton } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const emissionsInfoAvailable = [FoodType.cheese];

const navigationOptions = (prop) => {
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
    headerTitle: () => <Text.H1>{t("EMISSION_ITEM_SCREEN_TITLE")}</Text.H1>,
  };
};

export default navigationOptions;
