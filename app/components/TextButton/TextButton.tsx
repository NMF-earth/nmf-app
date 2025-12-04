import React from "react";
import { TouchableOpacity, View } from "react-native";
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
      <View style={{ width: iconSize + 10 }}>
        <Ionicons color={Colors.secondary} name={iconLeft} size={iconSize} />
      </View>
      <View style={styles.textContainer}>
        <Text.Primary darkGray style={styles.text}>
          {text}
        </Text.Primary>
      </View>
      <View style={{ width: iconSize + 10 }}>
        <Ionicons name="create" size={iconSize} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default TextButton;
