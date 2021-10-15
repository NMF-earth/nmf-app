import { StyleSheet } from "react-native";

import { Layout } from "style";
import { Layout as ConstantLayout } from "constant";

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
  // TODO: Rename These Classes To More Descriptive And Accurate Names...
  info: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  scanner: {
    alignSelf: "center",
    width: ConstantLayout.screen.width - 30,
    height: ConstantLayout.screen.height - ConstantLayout.screen.width,
    paddingBottom: 20,
  },
  scanAgain: {
    marginTop: 20,
    marginBottom: 20,
  },
});
