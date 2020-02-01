import { StyleSheet } from "react-native";
import { screen } from "../../constants/Layout";
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
