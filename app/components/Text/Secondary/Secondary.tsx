import React from "react";
import { Text } from "react-native";
import styles from "./Secondary.styles";
import mainStyle from "../styles";

interface Props {
  style?: any;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  bold?: boolean;
}

export default function Secondary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, bold } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (bold) {
    customStyle.push(mainStyle.bold);
  }

  return <Text {...props} style={customStyle} />;
}

Secondary.displayName = "Secondary";
