import { StyleSheet } from "react-native";
import { Colors } from "../../style";

export default StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 4,
  },
  tabItemSelected: {
    flex: 1,
    borderBottomColor: Colors.linkGreen,
    borderBottomWidth: 4,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
