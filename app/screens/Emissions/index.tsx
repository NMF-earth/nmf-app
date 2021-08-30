import React from "react";
import { useSelector } from "react-redux";

import { NoEmission } from "components";
import { NavStatelessComponent } from "interfaces";

import { selectors } from "./ducks";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";

const Emissions: NavStatelessComponent = () => {
  const emissions = useSelector(selectors.getEmissions);
  console.log("🚀 ~ file: index.tsx ~ line 13 ~ emissions", emissions);

  if (emissions?.length) {
    return <EmissionsScreen emissions={emissions} />;
  }

  return <NoEmission />;
};

Emissions.navigationOptions = navigationOptions();

export default Emissions;
