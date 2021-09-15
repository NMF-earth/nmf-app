import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import styles from "./Header.styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function Header(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];

  return <Text {...props} style={customStyle} />;
}

Header.displayName = "Header";
