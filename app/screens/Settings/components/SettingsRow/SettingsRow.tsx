import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./SettingsRow.styles";
import { Text } from "../../../../components";
import { Colors } from "../../../../style";

interface Props {
  title: string;
  onPress: () => void;
}

const SettingsRow = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Secondary bold>{title}</Text.Secondary>
      <Ionicons name={"ios-arrow-forward"} size={20} color={Colors.grey100} />
    </TouchableOpacity>
  );
};

export default SettingsRow;
