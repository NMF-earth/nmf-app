import React from "react";
import { useDispatch } from "react-redux";
import { Text, Button } from "../../../../components";
import styles from "./AddEmissionButton.styles";
import { t } from "../../../../utils";
import { Emission } from "../../../../interfaces";
import { emissions } from "../../../../ducks";

interface Props {
  emission: Emission;
  navigation: {
    goBack: () => void;
  };
}

const AddEmissionButton = ({ navigation, emission }: Props) => {
  const dispatch = useDispatch();

  const addEmission = () => {
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
