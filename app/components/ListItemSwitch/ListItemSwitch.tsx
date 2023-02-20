import React from "react";
import { View, ViewStyle, StyleProp } from "react-native";
import { Switch } from "react-native-gesture-handler";

import styles from "./ListItemSwitch.styles";
import Text from "../Text";

interface Props {
  title: string;
  value: boolean;
  onChange: () => void;
  showTopLine?: boolean;
  showBottomLine?: boolean;
}

const ListItemSwitch: React.FC<Props> = ({
  title,
  value,
  onChange,
  showTopLine,
  showBottomLine,
}) => {
  const containerStyle: StyleProp<ViewStyle> = [styles.container];
  if (showTopLine) {
    containerStyle.push(styles.topLine);
  }

  if (showBottomLine) {
    containerStyle.push(styles.bottomLine);
  }

  return (
    <View style={containerStyle}>
      <Text.Secondary style={styles.text}>{title}</Text.Secondary>
      <Switch value={value} onChange={onChange} />
    </View>
  );
};

export default ListItemSwitch;
