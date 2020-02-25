import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../../style";

const container: ViewStyle = {
  paddingVertical: 6,
  alignItems: "center",
  paddingHorizontal: 12,
  marginRight: 12,
  borderWidth: 1,
  borderRadius: 8
};

export default StyleSheet.create({
  containerNotSelected: {
    ...container,
    backgroundColor: Colors.linkGreen + "10",
    borderColor: Colors.darkLink + 20
  },
  containerSelected: {
    ...container,
    backgroundColor: Colors.linkGreen + "20",
    borderColor: Colors.linkGreen
  },
  containerIcon: {
    minWidth: 110,
    paddingVertical: 10
  },
  icon: {
    marginBottom: 2
  }
});
