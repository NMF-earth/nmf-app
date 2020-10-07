import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import styles from "./H1.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  green?: boolean;
}

export default function H1(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, green } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (green) {
    customStyle.push(mainStyle.green);
  }

  return <Text {...props} style={customStyle} />;
}

H1.displayName = "H1";
