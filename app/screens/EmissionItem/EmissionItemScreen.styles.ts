import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    paddingTop: 22,
  },
  item: {
    paddingTop: 6,
    paddingBottom: 24,
  },
  date: {
    flexDirection: "row",
  },
  day: {
    textTransform: "capitalize",
  },
});
