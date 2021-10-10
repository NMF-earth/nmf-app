import React, { ReactElement } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import { Text } from "components";

import styles from "./ClickableTag.styles";

type Props = {
  text: string;
  isSelected: boolean;
  onPress: () => void;
};

const ClickableTag = ({ text, isSelected, onPress }: Props): ReactElement => {
  const containerStyle: StyleProp<ViewStyle> = [
    styles.default,
    isSelected ? styles.selected : styles.unselected,
  ];

  const textColor = { darkGray: !isSelected, green: isSelected };

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text.Secondary bold {...textColor}>
        {text}
      </Text.Secondary>
    </TouchableOpacity>
  );
};

export default ClickableTag;
