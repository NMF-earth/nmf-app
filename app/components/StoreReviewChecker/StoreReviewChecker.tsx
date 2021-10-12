import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as StoreReview from "expo-store-review";

import { userPreferences } from "ducks";
import { Preferences } from "constant";

type Props = {
  children: React.ReactElement;
};

const StoreReviewChecker = ({ children }: Props): React.ReactElement => {
  const dispatch = useDispatch();
  const timesStarted = useSelector(userPreferences.selectors.getTimesStarted);
  const hasAcceptedTermsOfUseVersion =
    Preferences.currentTermsOfUseVersion ===
    useSelector(userPreferences.selectors.getAcceptedTermsOfUseVersion);
  const timesStartedRef = useRef<number>();

  useEffect(() => {
    timesStartedRef.current = timesStarted;
  }, [timesStarted]);
  const prevTimesStarted = timesStartedRef.current;

  useEffect(() => {
    if (hasAcceptedTermsOfUseVersion) {
      console.log("ALLLOU");

      dispatch(userPreferences.actions.incrementTimesStarted());
    }
  }, [dispatch, hasAcceptedTermsOfUseVersion]);

  useEffect(() => {
    const checkForReview = async () => {
      if (prevTimesStarted === 3 && timesStarted === 4 && (await StoreReview.hasAction())) {
        console.log("IHUUU");
        await StoreReview.requestReview();
      }
    };
    checkForReview();
  }, [dispatch, prevTimesStarted, timesStarted]);

  return children;
};

export default StoreReviewChecker;
