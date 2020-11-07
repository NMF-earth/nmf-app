import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  textView: {
    alignItems: "center",
    flex: 1,
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 4,
  },
  header: {
    paddingVertical: 14,
  },
  button: {
    marginVertical: 20,
  },
});
