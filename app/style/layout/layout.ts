import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL
  }
});
