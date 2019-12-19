import React from "react";
import { View } from "react-native";
import styles from "./LegendItem.styles";
import { Text } from "../../../../../../components";

interface Props {
  name: string;
  value: number;
  color: string;
}

const LegendItem = ({ name = "", value = 0, color = "" }: Props) => {
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
        <Text.Secondary>{value + " kg"}</Text.Secondary>
      </View>
    </View>
  );
};

export default LegendItem;
