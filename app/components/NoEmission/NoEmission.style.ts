import { StyleSheet } from "react-native";
import { screen } from "../../constants/Layout";
import layout from "../../style/layout";

export default StyleSheet.create({
  container: {
    ...layout.containerWithPadding
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
    paddingVertical: 10
  },
  header: {
    paddingVertical: 20
  },
  button: {
    marginTop: 20
  }
});
