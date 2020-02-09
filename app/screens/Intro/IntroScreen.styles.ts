import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { Layout } from "../../style";

export default StyleSheet.create({
  welcomeView: {
    // backgroundColor: "green",
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
    // backgroundColor: "orange",
    justifyContent: "center",
    flex: 2,
    alignItems: "center"
  },
  termsOfUseView: {
    // backgroundColor: "red",
    alignItems: "center",
    flex: 2
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10
  },
  button: {
    position: "absolute",
    bottom: PADDING_HORIZONTAL,
    right: 0,
    left: 0
  }
});
