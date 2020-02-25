import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignContent: "flex-start"
  },
  typeContainer: {
    paddingBottom: 24
  },
  textContainer: {
    ...Layout.containerWithPadding,
    paddingVertical: 12
  },
  tagContainer: {
    paddingLeft: PADDING_HORIZONTAL,
    flexDirection: "row"
  }
});
