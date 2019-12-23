import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: PADDING_HORIZONTAL
  },
  textContainer: {
    flex: 1
  },
  icon: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 2
  }
});
