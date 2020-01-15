import { StyleSheet } from "react-native";
import colors from "../../style/colors";
import layout from "../../style/layout";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "flex-start"
  },
  typeContainer: {
    paddingBottom: 24
  },
  textContainer: {
    ...layout.containerWithPadding,
    paddingVertical: 12
  },
  tagContainer: {
    paddingLeft: PADDING_HORIZONTAL,
    flexDirection: "row"
  }
});
