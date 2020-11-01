import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";

import { Text, Button } from "components";

import styles from "./AddEmissionButton.styles";
import { t } from "../../../../utils";
import { emissions } from "../../../../ducks";
import { EmissionPayload } from "../../../../interfaces/emission/emission.interface";

interface Props {
  emissionPayload: EmissionPayload;
  goBack: () => void;
}

const AddEmissionButton = ({ goBack, emissionPayload }: Props) => {
  const dispatch = useDispatch();

  const addEmission = () => {
    const emission = {
      ...emissionPayload,
      id: uuid(),
      isMitigated: false,
    };

    dispatch(emissions.actions.createEmission(emission));
    goBack();
  };

  return (
    <Button.Primary
      onPress={addEmission}
      textType={"Primary"}
      style={styles.button}
    >
      <Text.Primary white center bold>
        {t("ADD_EMISSION_SCREEN_ADD_THIS_EMISSION")}
      </Text.Primary>
    </Button.Primary>
  );
};

export default AddEmissionButton;
