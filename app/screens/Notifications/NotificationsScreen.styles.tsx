import { StyleSheet } from "react-native";

import { Layout } from "style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  intro: {
    paddingTop: 30,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 22,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
