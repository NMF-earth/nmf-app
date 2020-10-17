import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./H3.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: string | React.ReactElement;
  darkGray?: boolean;
  lightGray?: boolean;
  green?: boolean;
  blue?: boolean;
  center?: boolean;
}

export default function H1(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, green, blue, center } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (green) {
    customStyle.push(mainStyle.green);
  }

  if (blue) {
    customStyle.push(mainStyle.blue50);
  }

  if (center) {
    customStyle.push(mainStyle.center);
  }

  return <Text {...props} style={customStyle} />;
}

H1.displayName = "H3";
