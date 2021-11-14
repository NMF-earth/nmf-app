import { StyleSheet } from "react-native";

import { Layout } from "style";

const VERTICAL_PADDING_BETWEEN_ITEMS = 12;

export default StyleSheet.create({
  container: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
    ...Layout.containerWithPadding,
  },
  header: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
  },
  slider: {
    height: 40,
    marginHorizontal: 16,
  },
});
