import { StyleSheet } from "react-native";

import { Layout as ConstantsLayout } from "constant";
import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignContent: "flex-start",
  },
  emptyContainer: {
    height: 16,
  },
  textContainer: {
    ...Layout.containerWithPadding,
    paddingVertical: 12,
  },
  text: {
    marginTop: 4,
    textTransform: "capitalize",
  },
  textButtonContainer: {
    paddingTop: 10,
    paddingBottom: 4,
    flexDirection: "column",
  },
  tagContainer: {
    paddingLeft: ConstantsLayout.PADDING_HORIZONTAL,
    flexDirection: "row",
  },
  separator: {
    ...Layout.separator,
  },
});
