import React from "react";
import { Text } from "react-native";

interface Props {
  style: any,
}

export function MonoText(props: Props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}
