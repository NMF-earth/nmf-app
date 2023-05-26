import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Tag.styles";

interface Props {
  icon?: string;
  text: string;
  onPress: () => void;
}

const Tag: React.FC<Props> = ({ text, onPress, icon }) => {
  let iconItem = null;

  if (icon) {
    iconItem = (
      <Ionicons
        name={icon as keyof typeof Ionicons.glyphMap}
        size={32}
        style={styles.mainIcon}
        color={Colors.primary}
      />
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {iconItem}
      <View style={styles.textContainer}>
        <Text.Primary style={styles.text}>{text}</Text.Primary>
      </View>
      <Ionicons name={"chevron-forward"} size={20} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default Tag;
