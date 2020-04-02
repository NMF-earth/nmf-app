import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";
import moment from "moment";

import { Text, Button } from "../../../../components";
import styles from "./AddEmissionButton.styles";
import { t } from "../../../../utils";
import { emissions } from "../../../../ducks";
import { EmissionPayload } from "../../../../interfaces/emission/emission.interface";
import { navigate } from "../../../../navigation";

interface Props {
  emissionPayload: EmissionPayload;
  navigation: {
    goBack: () => void;
  };
}

const AddEmissionButton = ({ navigation, emissionPayload }: Props) => {
  const dispatch = useDispatch();
  const navigator = navigate(navigation);

  const addEmission = () => {
    const emission = {
      ...emissionPayload,
      id: uuid(),
      creationDate: moment()
        .utc()
        .toISOString(),
      isMitigated: false
    };

    dispatch(emissions.actions.createEmission(emission));
    navigator.goBack();
  };

  return (
    <Button.Primary
      onPress={addEmission}
      textType={"Primary"}
      style={styles.button}
    >
      <Text.Primary white center bold>
        {t("ADD_EMISSION_ADD_THIS_EMISSION")}
      </Text.Primary>
    </Button.Primary>
  );
};

export default AddEmissionButton;
