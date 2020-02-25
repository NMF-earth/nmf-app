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
    flex: 1,
    width: "100%",
    height: "100%"
  },
  textView: {
    alignItems: "center",
    flex: 1
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 4
  },
  header: {
    paddingVertical: 14
  },
  button: {
    marginTop: 20
  }
});
