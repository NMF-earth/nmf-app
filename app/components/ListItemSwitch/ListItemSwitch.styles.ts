import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  text: {
    paddingVertical: 18,
  },
  topLine: {
    borderTopColor: Colors.grey10,
    borderTopWidth: 1.6,
  },
  bottomLine: {
    borderBottomColor: Colors.grey10,
    borderBottomWidth: 1.6,
  },
});
