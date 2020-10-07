import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerNoPadding,
    paddingTop: 16,
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
});
