import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import styles from "./Tertiary.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  bold?: boolean;
  white?: boolean;
  green?: boolean;
  center?: boolean;
}

export default function Tertiary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { white, green, darkGray, lightGray, bold, children, center } = props;

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

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Tertiary.displayName = "Tertiary";
