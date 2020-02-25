import { StyleSheet } from "react-native";
import { Layout } from "../../style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18
  }
});
