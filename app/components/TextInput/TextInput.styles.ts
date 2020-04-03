import { StyleSheet } from "react-native";
import { Colors } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: PADDING_HORIZONTAL
  },
  input: {
    paddingHorizontal: PADDING_HORIZONTAL,
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 20
  },
  containerOptionalTitle: {
    marginBottom: 14,
    flexDirection: "row"
  },
  icon: {
    marginRight: 10
  }
});
