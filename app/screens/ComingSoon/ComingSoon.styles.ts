import { StyleSheet } from "react-native";
import { screen } from "../../constants/Layout";
import { Layout } from "../../style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding
  },
  image: {
    width: "100%",
    height: screen.width - 100
  },
  imageView: {
    marginTop: 14,
    flex: 1,
    width: "100%",
    height: "100%"
  },
  textView: {
    marginTop: 22,
    alignItems: "center",
    flex: 1
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10
  }
});
