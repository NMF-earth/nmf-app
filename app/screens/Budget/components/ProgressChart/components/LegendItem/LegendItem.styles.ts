import { StyleSheet } from "react-native";
import { Font } from "../../../../../../style";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10
  },
  coloredDot: {
    width: Font.FontSize.Secondary,
    height: Font.FontSize.Secondary,
    borderRadius: 8
  },
  coloredDotView: {
    marginHorizontal: 6,
    width: Font.FontSize.Secondary,
    height: "100%"
  }
});
