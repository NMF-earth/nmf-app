import React from "react";
import { useSelector } from "react-redux";

import { NoEmission } from "components";
import { NavStatelessComponent } from "interfaces";
import { t } from "utils";

import { selectors } from "./ducks";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";

const Emissions: NavStatelessComponent = () => {
  const emissions = useSelector(selectors.getEmissions);
  const recurringEmissions = useSelector(selectors.getRecurringEmisions);
  const recurringEmissionsData = {
    title: t("EMISSIONS_SCREEN_RECURRING_EMISSIONS"),
    data: recurringEmissions,
  };

  if (emissions?.length || recurringEmissions?.length) {
    return <EmissionsScreen emissions={emissions} recurringEmissions={recurringEmissionsData} />;
  }

  return <NoEmission />;
};

Emissions.navigationOptions = navigationOptions();

export default Emissions;
