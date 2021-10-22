import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./TextButton.styles";

interface Props {
  iconLeft: "calendar" | "repeat";
  text: string;
  onPress: () => void;
}

const iconSize = 20;

const TextButton: React.FC<Props> = ({ onPress, iconLeft, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons color={Colors.blue50} name={iconLeft} size={iconSize} />
      <Text.Primary darkGray style={styles.text}>
        {text}
      </Text.Primary>
      <Ionicons name="create" size={iconSize} color={Colors.green50} />
    </TouchableOpacity>
  );
};

export default TextButton;
