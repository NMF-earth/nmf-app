import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: Layout.containerWithPadding,
  centeredContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});
