import { StyleSheet } from "react-native";

import { Layout } from "../../style/layout";

export default StyleSheet.create({
  image: {
    height: 300,
    resizeMode: "contain",
    width: 300,
  },
  container: {
    ...Layout.containerWithPadding,
  },
});
