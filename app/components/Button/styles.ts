import { StyleSheet } from "react-native";
import colors from "../../style/colors";

export default StyleSheet.create({
  default: {
    paddingHorizontal: 28
  },
  black: {
    backgroundColor: colors.darkLink
  },
  fullWidth: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 0
  }
});
