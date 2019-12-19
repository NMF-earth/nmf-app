import { StyleSheet } from "react-native";
import { fontSize } from "../../../../../../style/font";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10
  },
  coloredDot: {
    width: fontSize.Secondary,
    height: fontSize.Secondary,
    borderRadius: 8
  },
  coloredDotView: {
    marginHorizontal: 6,
    width: fontSize.Secondary,
    height: "100%"
  }
});
