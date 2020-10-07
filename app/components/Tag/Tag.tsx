import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Tag.styles";

interface Props {
  selected: boolean;
  icon?:
    | "md-airplane"
    | "md-restaurant"
    | "md-build"
    | "md-play-circle"
    | "md-flash"
    | string;
  title: string;
  onPress: () => void;
}

const Tag = (props: Props) => {
  const { selected, onPress, title, icon } = props;
  let iconItem = null;
  let containterStyle = selected
    ? styles.containerSelected
    : styles.containerNotSelected;

  if (icon) {
    containterStyle = { ...containterStyle, ...styles.containerIcon };
    iconItem = (
      <Ionicons
        name={icon}
        size={30}
        style={styles.icon}
        color={selected ? Colors.green50 : Colors.grey70}
      />
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={containterStyle}>
      {iconItem}
      <Text.Primary green={selected} darkGray={!selected}>
        {title}
      </Text.Primary>
    </TouchableOpacity>
  );
};

export default Tag;
