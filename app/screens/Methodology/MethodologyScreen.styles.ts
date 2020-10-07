import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: Layout.containerWithPadding,
  textView: {
    marginTop: 22,
    alignItems: "center",
    flex: 1,
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10,
  },
});
