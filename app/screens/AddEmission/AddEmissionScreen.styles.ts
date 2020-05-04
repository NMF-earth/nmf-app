import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignContent: "flex-start",
  },
  typeContainer: {
    paddingBottom: 24,
  },
  textContainer: {
    ...Layout.containerWithPadding,
    paddingVertical: 12,
  },
  dateContainer: {
    paddingTop: 4,
    flexDirection: "row",
  },
  tagContainer: {
    paddingLeft: PADDING_HORIZONTAL,
    flexDirection: "row",
  },
  changeBtn: {
    paddingLeft: 4,
  },
  separator: {
    ...Layout.separator,
  },
});
