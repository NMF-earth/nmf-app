import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "../../navigation";
import styles from "./EmissionInfoButton.styles";

const EmissionInfoButton = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  return (
    <Ionicons
      name="md-information-circle"
      size={26}
      style={styles.infoIcon}
      onPress={navigator.openMethodology}
    />
  );
};

export default EmissionInfoButton;
