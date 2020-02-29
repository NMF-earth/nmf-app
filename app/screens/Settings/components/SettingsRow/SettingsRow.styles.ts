import { StyleSheet } from "react-native";
import { Colors } from "../../../../style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderTopColor: Colors.gray,
    borderTopWidth: 1,
    flex: 1
  },
  lastItem: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    marginBottom: 40
  }
});
