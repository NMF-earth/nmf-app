import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../style/colors";
import styles from "./EmissionListItem.styles";
import Text from "../Text";

interface EmissionListItemProps {
  transport?: boolean;
  food?: boolean;
  custom?: boolean;
  title: string;
  subTitle: string;
  onPress: () => void;
}

const EmissionListItem = ({
  transport = false,
  food = false,
  custom = false,
  title = "",
  subTitle = "",
  onPress
}: EmissionListItemProps) => {
  let iconName = "";
  let iconSize = 28;

  if (custom) {
    iconName = "md-build";
    iconSize = 26;
  }

  if (transport) {
    iconName = "md-airplane";
    iconSize = 30;
  }

  if (food) {
    iconName = "md-restaurant";
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons
        name={iconName}
        size={iconSize}
        style={styles.icon}
        color={colors.darkLink}
      />
      <View style={styles.textContainer}>
        <Text.Primary numberOfLines={1}>{title}</Text.Primary>
        <Text.Tertiary numberOfLines={1} light lightGray>
          {subTitle}
        </Text.Tertiary>
      </View>
      <Ionicons
        name={"ios-arrow-forward"}
        size={22}
        style={styles.icon}
        color={colors.darkLink}
      />
    </TouchableOpacity>
  );
};

export { EmissionListItem, EmissionListItemProps };
