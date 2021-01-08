import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "components";
import { Colors } from "style";

import styles from "./SettingsRow.styles";

interface Props {
  title: string;
  onPress: () => void;
}

const SettingsRow = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Secondary bold>{title}</Text.Secondary>
      <Ionicons
        name={"ios-chevron-forward-outline"}
        size={20}
        color={Colors.grey100}
      />
    </TouchableOpacity>
  );
};

export default SettingsRow;
