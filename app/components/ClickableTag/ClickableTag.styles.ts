import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
  default: {
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1.5,
  },
  selected: {
    backgroundColor: Colors.green10,
    borderColor: Colors.green50,
  },
  unselected: {
    backgroundColor: Colors.grey10,
    borderColor: Colors.grey40,
  },
});
