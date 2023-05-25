import { StyleSheet } from "react-native";

import { Colors, Font } from "style";

export default StyleSheet.create({
  red: {
    color: Colors.danger,
  },
  orange: {
    color: Colors.warning,
  },
  darkGray: {
    color: Colors.grey70,
  },
  lightGray: {
    color: Colors.black50,
  },
  green: {
    color: Colors.primary,
  },
  white: {
    color: Colors.white,
  },
  blue50: {
    color: Colors.secondary,
  },
  bold: {
    fontFamily: Font.FontWeight.Bold,
  },
  lightWeightText: {
    fontFamily: Font.FontWeight.Light,
  },
  center: {
    textAlign: "center",
  },
});
