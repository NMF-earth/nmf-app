import { StyleSheet } from "react-native";

import { Colors } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: PADDING_HORIZONTAL,
  },
  input: {
    marginBottom: 8,
    paddingHorizontal: PADDING_HORIZONTAL,
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
