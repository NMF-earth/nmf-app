import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../style/colors";

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
    backgroundColor: colors.linkGreen + "10",
    borderColor: colors.darkLink + 20
  },
  containerSelected: {
    ...container,
    backgroundColor: colors.linkGreen + "20",
    borderColor: colors.linkGreen
  },
  containerIcon: {
    minWidth: 130,
    paddingVertical: 10
  },
  icon: {
    marginBottom: 2
  }
});
