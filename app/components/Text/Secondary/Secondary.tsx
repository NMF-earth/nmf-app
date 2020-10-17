import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import styles from "./Secondary.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  red?: boolean;
  bold?: boolean;
  white?: boolean;
  green?: boolean;
  blue?: boolean;
  center?: boolean;
  lightWeightText?: boolean;
  numberOfLines?: number;
}

export default function Secondary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const {
    blue,
    white,
    green,
    darkGray,
    lightGray,
    red,
    bold,
    children,
    center,
    lightWeightText,
  } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (green) {
    customStyle.push(mainStyle.green);
  }

  if (white) {
    customStyle.push(mainStyle.white);
  }

  if (blue) {
    customStyle.push(mainStyle.blue50);
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

Secondary.displayName = "Secondary";
