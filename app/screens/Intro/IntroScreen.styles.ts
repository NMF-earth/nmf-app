import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
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
  },
  button: {
    position: "absolute",
    bottom: PADDING_HORIZONTAL,
    right: 0,
    left: 0
  }
});
