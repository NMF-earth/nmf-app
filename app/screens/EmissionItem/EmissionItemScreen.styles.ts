import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    paddingTop: 22,
  },
  item: {
    alignItems: "flex-start",
    paddingTop: 2,
    paddingBottom: 24,
  },
  text: {
    paddingTop: 2,
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
