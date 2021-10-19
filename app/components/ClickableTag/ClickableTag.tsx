import React, { ReactElement } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import { Text } from "components";

import styles from "./ClickableTag.styles";

type Props = {
  text: string;
  isSelected: boolean;
  onPress: () => void;
  touchableStyle?: StyleProp<ViewStyle>;
};

const ClickableTag = ({ text, isSelected, onPress, touchableStyle }: Props): ReactElement => {
  const containerStyle: StyleProp<ViewStyle> = [
    styles.default,
    isSelected ? styles.selected : styles.unselected,
    touchableStyle,
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
