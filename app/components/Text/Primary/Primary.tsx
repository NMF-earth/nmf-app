import React from "react";
import { Text } from "react-native";
import styles from "./Primary.styles";
import mainStyle from "../styles";

interface Props {
  style?: any;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  bold?: boolean;
}

export default function Primary(props: Props): React.ReactElement {
  let customStyle = [styles.default, props.style];
  const { darkGray, lightGray, bold, children } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (bold) {
    customStyle.push(mainStyle.bold);
  }

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Primary.displayName = "Primary";
