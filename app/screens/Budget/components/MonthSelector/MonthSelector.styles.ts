import { StyleSheet } from "react-native";
import { Layout } from "../../../../style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    paddingVertical: 20,
    flex: 1,
    flexDirection: "row"
  },
  arrowForward: {
    justifyContent: "center",
    flex: 1
  },
  arrowBack: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1
  },
  monthView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 4
  }
});
