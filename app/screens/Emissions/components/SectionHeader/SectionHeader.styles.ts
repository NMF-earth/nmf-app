import { StyleSheet } from "react-native";
import { Colors } from "../../../../style";
import { PADDING_HORIZONTAL } from "../../../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
  },
});

export default styles;
