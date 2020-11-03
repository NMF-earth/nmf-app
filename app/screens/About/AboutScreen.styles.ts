import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  header: {
    paddingVertical: 26,
  },
  subHeader: {
    paddingVertical: 12,
  },
  separator: {
    height: 30,
  },
  githubView: {
    flexDirection: "row",
  },
});
