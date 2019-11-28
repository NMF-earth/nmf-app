import React from "react";
import { Text } from "react-native";

interface Props {
  style?: any;
  children: string | React.ReactElement;
}

export function MonoText(props: Props): React.ReactElement {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}
