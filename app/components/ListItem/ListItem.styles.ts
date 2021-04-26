import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    flex: 1,
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
