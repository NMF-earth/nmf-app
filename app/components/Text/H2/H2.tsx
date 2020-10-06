import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./H2.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  blue50?: boolean;
  green?: boolean;
}

export default function H2(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, blue50, green } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (green) {
    customStyle.push(mainStyle.green);
  }

  if (blue50) {
    customStyle.push(mainStyle.blue50);
  }

  return <Text {...props} style={customStyle} />;
}

H2.displayName = "H2";
