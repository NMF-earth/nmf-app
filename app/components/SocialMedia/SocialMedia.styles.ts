import { StyleSheet } from "react-native";
import layout from "../../style/layout";

export default StyleSheet.create({
  container: {
    ...layout.containerWithPadding,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18
  }
});
