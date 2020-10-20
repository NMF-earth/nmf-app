import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "../../navigation";
import { EmissionEnum } from "../../interfaces";
import styles from "./EmissionInfoButton.styles";

interface Props {
  emissionType?: EmissionEnum;
}

const EmissionInfoButton = ({emissionType}: Props) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  return (
    <Ionicons
      name="md-information-circle"
      size={26}
      style={styles.infoIcon}
      onPress={() => navigator.openHtmlView(emissionType)}
    />
  );
};

export default EmissionInfoButton;
