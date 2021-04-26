import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    paddingTop: 22,
  },
  lastItem: {
    paddingTop: 6,
    paddingBottom: 24,
  },
  text: {
    paddingTop: 6,
  },
  date: {
    flexDirection: "row",
  },
  mitigationContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  day: {
    textTransform: "capitalize",
  },
});
