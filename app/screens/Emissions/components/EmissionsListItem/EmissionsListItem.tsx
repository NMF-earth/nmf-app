import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormattedNumber } from "react-native-globalize";

import { Text } from "components";
import { Colors } from "style";

import styles from "./EmissionsListItem.styles";
import EmissionsListItemProps from "./EmissionsListItemProps";

const EmissionsListItem = ({
  isMitigated,
  name = "",
  iconName = "md-car",
  title = "",
  co2value = 0,
  onPress,
}: EmissionsListItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>
      <View
        style={isMitigated ? styles.mitigatedCircle : styles.notMitigatedCircle}
      />
      <Ionicons
        name={iconName}
        size={22}
        style={styles.icon}
        color={isMitigated ? Colors.green50 : Colors.grey70}
      />
    </View>
    <View style={styles.textContainer}>
      <Text.Primary numberOfLines={1}>
        {name.length ? name : title}
      </Text.Primary>
      <View style={styles.detailsContainer}>
        <Text.Tertiary numberOfLines={1} lightGray>
          <FormattedNumber
            maximumFractionDigits={co2value >= 1 ? 2 : 4}
            value={co2value}
          />{" "}
          kgCO2
        </Text.Tertiary>
        {isMitigated && (
          <>
            <Text.Tertiary lightGray>{" • "}</Text.Tertiary>
            <Text.Tertiary green>{"Offset"}</Text.Tertiary>
          </>
        )}
      </View>
    </View>
    <Ionicons
      name={"ios-chevron-forward-outline"}
      size={18}
      style={styles.icon}
      color={Colors.grey100}
    />
  </TouchableOpacity>
);

export default EmissionsListItem;
