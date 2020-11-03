import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { emissions } from "ducks";
import { navigate } from "navigation";

import styles from "./InfoButton.styles";

const InfoButton = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const emissionId = pathOr("", ["params", "id"], route);

  const { emissionModelType } =
    useSelector((state) =>
      emissions.selectors.getEmissionById(state, emissionId)
    ) || {};

  return (
    <Ionicons
      name="md-information-circle"
      size={26}
      style={styles.infoIcon}
      onPress={() => navigator.openInfoModal({ emissionModelType })}
    />
  );
};

export default InfoButton;
