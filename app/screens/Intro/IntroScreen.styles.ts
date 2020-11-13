import { StyleSheet } from "react-native";

import { Layout as ConstantsLayout } from "constant";
import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
  },
  termsOfUseView: {
    paddingHorizontal: ConstantsLayout.PADDING_HORIZONTAL,
    alignItems: "center",
    flex: 2,
  },
  text: {
    textAlign: "center",
    paddingVertical: 10,
  },
  buttonView: {
    position: "absolute",
    bottom: ConstantsLayout.PADDING_HORIZONTAL,
    right: 0,
    left: 0,
    marginHorizontal: ConstantsLayout.PADDING_HORIZONTAL,
  },
  imageView: {
    flex: 2,
  },
});
