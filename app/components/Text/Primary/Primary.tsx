import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./Primary.styles";
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
  secondary?: boolean;
  center?: boolean;
  numberOfLines?: number;
  black70?: boolean;
  black60?: boolean;
  black?: boolean;
}

export default function Primary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const {
    red,
    white,
    secondary,
    primary,
    darkGray,
    lightGray,
    bold,
    children,
    center,
    black70,
    black60,
    black,
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

  if (white) {
    customStyle.push(mainStyle.white);
  }

  if (bold) {
    customStyle.push(mainStyle.bold);
  }

  if (center) {
    customStyle.push(mainStyle.center);
  }

  if (red) {
    customStyle.push(mainStyle.red);
  }

  if (black70) {
    customStyle.push(mainStyle.black70);
  }

  if (black60) {
    customStyle.push(mainStyle.black60);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  if (secondary) {
    customStyle.push(mainStyle.secondary);
  }

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Primary.displayName = "Primary";
