import React from "react";
import { TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import styles from "./ListItem.styles";
import Text from "../Text";

interface Props {
  title: string;
  onPress: () => void;
  showTopLine?: boolean;
  showBottomLine?: boolean;
}

const ListItem: React.FC<Props> = ({ title, onPress, showTopLine, showBottomLine }) => {
  const containerStyle: StyleProp<ViewStyle> = [styles.container];

  if (showTopLine) {
    containerStyle.push(styles.topLine);
  }

  if (showBottomLine) {
    containerStyle.push(styles.bottomLine);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text.Secondary numberOfLines={1}>{title}</Text.Secondary>
      <Ionicons name={"ios-chevron-forward-outline"} size={14} color={Colors.grey40} />
    </TouchableOpacity>
  );
};

export default ListItem;
