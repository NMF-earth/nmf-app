import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SettingsRow.styles";
import { Text } from "../../../../components";
import { Colors } from "../../../../style";

interface Props {
  title: string;
  onPress: () => void;
  isLastItem?: boolean;
}

const SettingsRow = ({ title, onPress, isLastItem }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isLastItem ? [styles.container, styles.lastItem] : styles.container
      }
    >
      <Text.Tertiary>{title}</Text.Tertiary>
      <Ionicons name={"ios-arrow-forward"} size={18} color={Colors.darkLink} />
    </TouchableOpacity>
  );
};

export default SettingsRow;
