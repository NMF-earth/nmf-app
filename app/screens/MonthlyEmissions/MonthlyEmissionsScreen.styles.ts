import { StyleSheet } from "react-native";

import { Colors, ComponentsStyle } from "style";
import { Layout } from "constant";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Layout.SPACING.DOUBLE,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
    ...ComponentsStyle.header,
  },
});
