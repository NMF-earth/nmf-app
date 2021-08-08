import { StyleSheet } from "react-native";

import { Layout, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  hiddenBtn: {
    marginTop: 8,
    marginHorizontal: 10,
  },
  logoNMFContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoNMF: {
    width: "50%",
  },
  appVersionTitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  textContainer: {
    flex: 1,
  },
  quote: {
    color: Colors.black,
    fontStyle: "italic",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 30,
    color: Colors.green50,
    fontWeight: "bold",
  },
});
