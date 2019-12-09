import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import styles from "./Secondary.styles";
import mainStyle from "../styles";
import { fontSize } from "../../../style/font";

const PADDING_VERTICAL = 12;

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  fullWidth?: boolean;
  textType: "Primary" | "Secondary" | "Tertiary";
  black?: boolean;
  onPress: () => void;
}

export default function Secondary(props: Props): React.ReactElement {
  const customStyle = [mainStyle.default, styles.default, props.style];
  const { fullWidth, children, textType, black, onPress } = props;

  if (fullWidth) {
    customStyle.push(mainStyle.fullWidth);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  const additionalStyle = {
    paddingVertical: PADDING_VERTICAL,
    borderRadius: PADDING_VERTICAL * 2 + fontSize[textType]
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={[customStyle, additionalStyle]}
    >
      {children}
    </TouchableOpacity>
  );
}

Secondary.displayName = "Secondary";
