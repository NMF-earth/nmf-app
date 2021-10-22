import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as StoreReview from "expo-store-review";

import { userPreferences } from "ducks";
import { Preferences } from "constant";

type Props = {
  children: React.ReactElement;
};

const NB_OF_STARTS_BEFORE_ASK_RATING = 6;

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
      dispatch(userPreferences.actions.incrementTimesStarted());
    }
  }, [dispatch, hasAcceptedTermsOfUseVersion]);

  useEffect(() => {
    const checkForReview = async () => {
      if (
        prevTimesStarted === NB_OF_STARTS_BEFORE_ASK_RATING - 1 &&
        timesStarted === NB_OF_STARTS_BEFORE_ASK_RATING &&
        (await StoreReview.hasAction())
      ) {
        await StoreReview.requestReview();
      }
    };
    checkForReview();
  }, [dispatch, prevTimesStarted, timesStarted]);

  return children;
};

export default StoreReviewChecker;
