import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as StoreReview from "expo-store-review";

import { NoEmission } from "components";
import { NavStatelessComponent } from "interfaces";
import { userPreferences } from "ducks";

import { selectors } from "./ducks";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";

const Emissions: NavStatelessComponent = () => {
  const emissions = useSelector(selectors.getEmissions);
  const dispatch = useDispatch();
  const timesStarted = useSelector(userPreferences.selectors.getTimesStarted);

  useEffect(() => {
    dispatch(userPreferences.actions.incrementTimesStarted());
  }, [dispatch]);

  useEffect(() => {
    const checkForReview = async () => {
      if (timesStarted === 4 && (await StoreReview.hasAction())) {
        await StoreReview.requestReview();
      }
    };
    checkForReview();
  }, [dispatch, timesStarted]);

  if (emissions?.length) {
    return <EmissionsScreen emissions={emissions} />;
  }

  return <NoEmission />;
};

Emissions.navigationOptions = navigationOptions();

export default Emissions;
