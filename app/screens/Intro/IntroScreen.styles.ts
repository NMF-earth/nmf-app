import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { Layout } from "../../style";

export default StyleSheet.create({
  welcomeView: {
    flex: 1,
    justifyContent: "flex-end"
  },
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between"
  },
  image: {
    width: "60%"
  },
  imageView: {
    justifyContent: "center",
    flex: 2,
    alignItems: "center"
  },
  termsOfUseView: {
    alignItems: "center",
    flex: 2
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10
  },
  buttonView: {
    position: "absolute",
    bottom: PADDING_HORIZONTAL,
    right: 0,
    left: 0,
    marginHorizontal: PADDING_HORIZONTAL
  }
});
