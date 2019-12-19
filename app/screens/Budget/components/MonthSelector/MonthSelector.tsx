import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./MonthSelector.styles";
import { Text } from "../../../../components";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../../style/colors";

const MonthSelector = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // do nothing.
        }}
        style={styles.arrowForward}
      >
        <Ionicons name={"ios-arrow-back"} size={30} color={colors.swordGray} />
      </TouchableOpacity>
      <View style={styles.monthView}>
        <Text.H3>Month</Text.H3>
      </View>
      <TouchableOpacity
        onPress={() => {
          // do nothing.
        }}
        style={styles.arrowBack}
      >
        <Ionicons
          name={"ios-arrow-forward"}
          size={30}
          color={colors.swordGray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MonthSelector;
