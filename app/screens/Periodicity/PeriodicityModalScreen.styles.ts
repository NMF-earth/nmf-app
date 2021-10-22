import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: Layout.containerWithPadding,
  textView: {
    marginTop: 22,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  tag: {
    margin: 6,
  },
  tagSection: {
    marginVertical: 5,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  confirmBtnContainer: {
    marginTop: 20,
  },
});
