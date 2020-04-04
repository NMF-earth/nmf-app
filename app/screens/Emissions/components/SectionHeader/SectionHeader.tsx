import React from "react";
import { View } from "react-native";
import { Text } from "../../../../components";
import styles from "./SectionHeader.styles";

const SectionHeader = ({ date }) => (
  <View style={styles.container}>
    <Text.Primary>{date}</Text.Primary>
  </View>
);

export default SectionHeader;
