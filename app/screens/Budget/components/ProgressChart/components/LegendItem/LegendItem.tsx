import React from "react";
import { View } from "react-native";

import { Text } from "components";

import styles from "./LegendItem.styles";

interface Props {
  name: string;
  value: number;
  color: string;
}

const LegendItem: React.FC<Props> = ({ name = "", value = 0, color = "" }) => {
  if (value === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.coloredDotView}>
        <View style={[{ backgroundColor: color }, styles.coloredDot]} />
      </View>
      <View>
        <Text.Secondary bold>{name}</Text.Secondary>
        <Text.Secondary lightGray>{value + " kg"}</Text.Secondary>
      </View>
    </View>
  );
};

export default LegendItem;
