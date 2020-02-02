import { StyleSheet } from "react-native";
import layout from "../../../../style/layout";

const VERTICAL_PADDING_BETWEEN_ITEMS = 12;

export default StyleSheet.create({
  container: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
    ...layout.containerWithPadding
  },
  header: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS
  },
  slider: {
    height: 40,
    marginHorizontal: 24
  }
});
