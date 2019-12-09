import React from "react";
import { Text } from "react-native";
import styles from "./H1.styles";
import mainStyle from "../styles";

interface Props {
  style?: any;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
}

export default function H1(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  return <Text {...props} style={customStyle} />;
}

H1.displayName = "H1";
