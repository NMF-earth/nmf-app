import React from "react";
import { Text } from "react-native";
import styles from "./MonoText..styles";

interface Props {
  style?: any;
  children: string | React.ReactElement;
}

export default function MonoText(props: Props): React.ReactElement {
  return <Text {...props} style={[props.style, styles.default]} />;
}
