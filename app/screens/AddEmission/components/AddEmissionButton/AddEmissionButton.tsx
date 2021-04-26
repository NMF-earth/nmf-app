import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";
import { StackActions, useNavigation } from "@react-navigation/native";

import { Text, Button } from "components";
import { emissions } from "ducks";
import { EmissionPayload } from "interfaces";
import { t } from "utils";

import styles from "./AddEmissionButton.styles";

interface Props {
  emissionPayload: EmissionPayload;
}

const AddEmissionButton = ({ emissionPayload }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addEmission = () => {
    const emission = {
      ...emissionPayload,
      id: uuid(),
      isMitigated: false,
    };

    dispatch(emissions.actions.createEmission(emission));

    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <Button.Primary onPress={addEmission} textType={"Primary"} style={styles.button}>
      <Text.Primary white center bold>
        {t("ADD_EMISSION_SCREEN_ADD_THIS_EMISSION")}
      </Text.Primary>
    </Button.Primary>
  );
};

export default AddEmissionButton;
