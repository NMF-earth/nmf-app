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
  white?: boolean;
  green?: boolean;
}

export default function Primary(props: Props): React.ReactElement {
  let customStyle = [styles.default, props.style];
  const { white, green, darkGray, lightGray, bold, children } = props;

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

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Primary.displayName = "Primary";
