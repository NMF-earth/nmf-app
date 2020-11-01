import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: Layout.containerWithPadding,
  title: {
    paddingTop: 14,
    paddingBottom: 4,
  },
  paragraph: {
    paddingVertical: 10,
  },
  separator: {
    height: 30,
  },
});
