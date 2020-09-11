import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ListItem.styles";
import Text from "../Text";
import { Colors } from "../../style";

interface Props {
  title: string;
  onPress: () => void;
}

const ListItem = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Secondary numberOfLines={1} style={styles.text}>
        {title}
      </Text.Secondary>
      <Ionicons
        style={styles.icon}
        name={"ios-arrow-forward"}
        size={26}
        color={Colors.grey40}
      />
    </TouchableOpacity>
  );
};

export default ListItem;
