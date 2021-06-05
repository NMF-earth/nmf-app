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
  green?: boolean;
  blue?: boolean;
  center?: boolean;
  numberOfLines?: number;
}

export default function Primary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { red, white, blue, green, darkGray, lightGray, bold, children, center } = props;

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

  if (bold) {
    customStyle.push(mainStyle.bold);
  }

  if (center) {
    customStyle.push(mainStyle.center);
  }

  if (red) {
    customStyle.push(mainStyle.red);
  }

  if (blue) {
    customStyle.push(mainStyle.blue50);
  }

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Primary.displayName = "Primary";
