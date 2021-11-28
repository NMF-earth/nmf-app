import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";
import { StackActions, useNavigation } from "@react-navigation/native";

import { Button } from "components";
import { emissions, recurringEmissions } from "ducks";
import {
  EmissionPayload,
  Emission,
  RecurringEmission,
  PeriodicityType,
  WeekDays,
} from "interfaces";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./AddEmissionButton.styles";

interface Props {
  emissionPayload: EmissionPayload;
  periodType: PeriodicityType;
  periodWeekDays: Array<WeekDays>;
  periodTimes: number;
}

const AddEmissionButton: React.FC<Props> = ({
  emissionPayload,
  periodType,
  periodWeekDays,
  periodTimes,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const addEmission = () => {
    if (periodTimes) {
      const newRecurringEmission: RecurringEmission = {
        ...emissionPayload,
        id: uuid(),
        periodType,
        weekDays: periodWeekDays,
        times: periodTimes,
      };

      dispatch(recurringEmissions.actions.createRecurringEmission(newRecurringEmission));
    } else {
      const emission: Emission = {
        ...emissionPayload,
        id: uuid(),
        isMitigated: false,
      };

      dispatch(emissions.actions.createEmission(emission));
    }

    navigation.dispatch(StackActions.popToTop());
    navigator.openEmissions();
  };

  return (
    <Button.Primary
      onPress={addEmission}
      text={t("ADD_EMISSION_SCREEN_ADD_THIS_EMISSION")}
      style={styles.button}
    />
  );
};

export default AddEmissionButton;
