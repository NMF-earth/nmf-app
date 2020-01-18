import React from "react";
import { useDispatch } from "react-redux";
import { version } from "carbon-footprint";
import { Text, Button } from "../../../../components";
import styles from "./AddEmissionButton.styles";
import { t } from "../../../../utils/translations";
import { Emission } from "../../../../interfaces";
import { emissions } from "../../../../ducks";

const AddEmissionButton = ({ navigation, emissionType }) => {
  const dispatch = useDispatch();

  const addEmission = () => {
    // TODO: should be a real emission
    const emission: Emission = {
      id: Date.now(),
      creationDate: "now",
      co2eqKilograms: 10,
      co2eqModelVersion: version.co2eqModel,
      emissionType: emissionType,
      isMitigated: false
    };

    dispatch(emissions.actions.createEmission(emission));
    navigation.goBack();
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
