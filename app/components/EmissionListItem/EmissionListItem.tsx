import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../style/colors";
import styles from "./EmissionListItem.styles";
import Text from "../Text";

interface Props {
  plane?: boolean;
  restaurant?: boolean;
  build?: boolean;
  title: string;
  subTitle: string;
}

const EmissionListItem = ({
  plane = false,
  restaurant = false,
  build = false,
  title = "",
  subTitle = ""
}: Props) => {
  let iconName = "";
  let iconSize = 28;

  if (build) {
    iconName = "md-build";
    iconSize = 26;
  }

  if (plane) {
    iconName = "md-airplane";
    iconSize = 30;
  }

  if (restaurant) {
    iconName = "md-restaurant";
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name={iconName}
        size={iconSize}
        style={styles.icon}
        color={colors.darkLink}
      />
      <View style={styles.textContainer}>
        <Text.Primary numberOfLines={1}>{title}</Text.Primary>
        <Text.Tertiary numberOfLines={1} lightGray>
          {subTitle}
        </Text.Tertiary>
      </View>
      <Ionicons
        name={"ios-arrow-forward"}
        size={22}
        style={styles.icon}
        color={colors.darkLink}
      />
    </View>
  );
};

export default EmissionListItem;
