import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",
    backgroundColor: Colors.primary + "20",
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    textTransform: "capitalize",
  },
  mainIcon: {
    marginRight: 16,
  },
});
