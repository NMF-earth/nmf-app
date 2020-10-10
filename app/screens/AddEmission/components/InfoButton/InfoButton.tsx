import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "../../../../navigation";
import styles from "./InfoButton.styles";

export default () => {
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
