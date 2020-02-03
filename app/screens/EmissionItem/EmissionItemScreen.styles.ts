import { StyleSheet } from "react-native";
import layout from "../../style/layout";

export default StyleSheet.create({
  container: {
    ...layout.containerWithPadding
  },
  textView: {
    marginTop: 22,
    flex: 1
  },
  paragraph: {
    paddingVertical: 10
  }
});
