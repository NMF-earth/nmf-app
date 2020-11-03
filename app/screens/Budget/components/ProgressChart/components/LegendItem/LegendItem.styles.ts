import { StyleSheet } from "react-native";

import { Font } from "style";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
  },
  coloredDot: {
    width: Font.FontSize.Secondary + 2,
    height: Font.FontSize.Secondary + 2,
    borderRadius: 10,
  },
  coloredDotView: {
    alignSelf: "center",
    marginHorizontal: 6,
    width: Font.FontSize.Secondary,
    height: "100%",
  },
});
