import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SelectableListItem.styles";
import Text from "../../components/Text";
import { Colors } from "../../style";

interface Props {
  selected: boolean;
  title: string;
  onPress: () => void;
}

const SelectableListItem = ({ selected, title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Primary bold green={selected} style={styles.text}>
        {title}
      </Text.Primary>
      {selected && (
        <Ionicons
          name={"md-checkmark"}
          size={26}
          style={styles.icon}
          color={Colors.green50}
        />
      )}
    </TouchableOpacity>
  );
};

export default SelectableListItem;
