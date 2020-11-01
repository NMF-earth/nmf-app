import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Colors } from "style";

export default StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: Layout.PADDING_HORIZONTAL,
  },
  input: {
    marginBottom: 8,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    height: 40,
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 20,
  },
  containerOptionalTitle: {
    marginBottom: 14,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
