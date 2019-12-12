import { StyleSheet } from "react-native";
import colors from "../../style/colors";

export default StyleSheet.create({
  title: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center"
  },
  list: {
    borderTopColor: colors.gray,
    borderTopWidth: 1
  },
  listItem: {
    flex: 1,
    padding: 15
  },
  buttonText: {
    textAlign: "center"
  },
  button: {
    marginTop: 20,
    alignSelf: "center"
  }
});
