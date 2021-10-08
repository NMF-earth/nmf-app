import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./Tertiary.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  red?: boolean;
  bold?: boolean;
  white?: boolean;
  primary?: boolean;
  center?: boolean;
  lightWeightText?: boolean;
  numberOfLines?: number;
  black70?: boolean;
}

export default function Tertiary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const {
    white,
    primary,
    darkGray,
    lightGray,
    bold,
    children,
    center,
    lightWeightText,
    red,
    black70,
  } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (primary) {
    customStyle.push(mainStyle.primary);
  }

  if (black70) {
    customStyle.push(mainStyle.black70);
  }
  if (white) {
    customStyle.push(mainStyle.white);
  }

  if (bold) {
    customStyle.push(mainStyle.bold);
  }

  if (center) {
    customStyle.push(mainStyle.center);
  }

  if (lightWeightText) {
    customStyle.push(mainStyle.lightWeightText);
  }

  if (red) {
    customStyle.push(mainStyle.red);
  }

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Tertiary.displayName = "Tertiary";
