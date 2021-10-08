import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./H2.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  black70?: boolean;
  black?: boolean;
  lightGray?: boolean;
  secondary?: boolean;
  primary?: boolean;
}

export default function H2(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, secondary, primary, black, black70 } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  if (black70) {
    customStyle.push(mainStyle.black70);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (primary) {
    customStyle.push(mainStyle.primary);
  }

  if (secondary) {
    customStyle.push(mainStyle.secondary);
  }

  return <Text {...props} style={customStyle} />;
}

H2.displayName = "H2";
