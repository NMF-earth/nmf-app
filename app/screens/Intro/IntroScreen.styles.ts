import { StyleSheet } from "react-native";
import { Layout } from "../../style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    justifyContent: "space-between"
  },
  image: {
    width: "60%"
  },
  imageView: {
    justifyContent: "center",
    marginTop: 50,
    flex: 1,
    alignItems: "center"
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
