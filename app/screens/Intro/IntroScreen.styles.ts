import { StyleSheet } from "react-native";

import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { Layout } from "../../style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between",
  },
  termsOfUseView: {
    paddingHorizontal: PADDING_HORIZONTAL,
    alignItems: "center",
    flex: 2,
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10,
  },
  buttonView: {
    position: "absolute",
    bottom: PADDING_HORIZONTAL,
    right: 0,
    left: 0,
    marginHorizontal: PADDING_HORIZONTAL,
  },
  imageView: {
    flex: 2,
  },
});
