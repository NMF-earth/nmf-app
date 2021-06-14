import React from "react";
import { Text, StyleProp, TextStyle, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import styles from "./Link.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  center?: boolean;
  url: string;
  accessibilityHint?: string;
}

export default function Link(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { children, center, url } = props;

  if (center) {
    customStyle.push(mainStyle.center);
  }

  return (
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(url)}>
      <Text {...props} style={customStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Link.displayName = "Tertiary";
