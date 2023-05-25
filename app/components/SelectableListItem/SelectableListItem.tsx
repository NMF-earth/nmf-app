import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./SelectableListItem.styles";

interface Props {
  selected: boolean;
  title: string;
  onPress: () => void;
}

const SelectableListItem: React.FC<Props> = ({ selected, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Primary bold numberOfLines={1} green={selected} style={styles.text}>
        {title}
      </Text.Primary>
      {selected && (
        <Ionicons name={"md-checkmark"} size={26} style={styles.icon} color={Colors.primary} />
      )}
    </TouchableOpacity>
  );
};

export default SelectableListItem;
