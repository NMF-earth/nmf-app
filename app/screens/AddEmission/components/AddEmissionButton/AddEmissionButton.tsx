import React from "react";
import { useDispatch } from "react-redux";
import { version } from "carbon-footprint";
import { Text, Button } from "../../../../components";
import styles from "./AddEmissionButton.styles";
import { t } from "../../../../utils/translations";
import {
  Emission,
  EmissionTypeEnum,
  EmissionFoodTypeEnum,
  EmissionTransportTypeEnum
} from "../../../../interfaces";
import { emissions } from "../../../../ducks";

const AddEmissionButton = ({ navigation, emissionType }) => {
  const dispatch = useDispatch();

  return (
    <Button.Primary
      onPress={() => {
        // TODO: should be a real emission
        let emission: Emission = {
          id: Date.now(),
          creationDate: "now",
          co2eqKilograms: 10,
          co2eqModelVersion: version.co2eqModel,
          emissionType: null,
          isMitigated: false
        };

        switch (emissionType) {
          case EmissionTypeEnum.food:
            emission = {
              ...emission,
              emissionType: EmissionTypeEnum.food,
              food: {
                foodType: EmissionFoodTypeEnum.redMeat,
                quantityKilograms: 0.3
              }
            };
            break;
          case EmissionTypeEnum.transport:
            emission = {
              ...emission,
              emissionType: EmissionTypeEnum.transport,
              transport: {
                transportType: EmissionTransportTypeEnum.plane,
                durationHours: 1.8
              }
            };
            break;
          case EmissionTypeEnum.custom:
            emission = {
              ...emission,
              emissionType: EmissionTypeEnum.custom
            };
            break;

          default:
            // TODO: sentry error
            return;
        }
        dispatch(emissions.actions.createEmission(emission));
        navigation.goBack();
      }}
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
