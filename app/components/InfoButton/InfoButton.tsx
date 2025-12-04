import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { emissions } from "ducks";
import { navigate } from "navigation";

import styles from "./InfoButton.styles";

const InfoButton: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const emissionId = pathOr("", ["params", "id"], route);

  const { emissionModelType } =
    useSelector((state) => emissions.selectors.getEmissionById(state, emissionId)) || {};

  return (
    <TouchableOpacity onPress={() => navigator.openInfoModal({ emissionModelType })}>
      <Ionicons name="information-circle" size={26} style={styles.infoIcon} />
    </TouchableOpacity>
  );
};

export default InfoButton;
