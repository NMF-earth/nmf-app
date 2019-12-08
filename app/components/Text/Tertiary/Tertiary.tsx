import React from "react";
import { Text } from "react-native";
import styles from "./Tertiary.styles";
import mainStyle from "../styles";

interface Props {
  style?: any;
  children: string | React.ReactElement;
  darkGray?: boolean;
  lightGray?: boolean;
}

export default function Tertiary(props: Props): React.ReactElement {
  let customStyle = [styles.default, props.style];
  const { darkGray, lightGray } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  return <Text {...props} style={customStyle} />;
}

Tertiary.displayName = "Tertiary";
