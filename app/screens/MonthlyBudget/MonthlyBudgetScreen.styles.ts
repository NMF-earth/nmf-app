import { StyleSheet } from "react-native";
import layout from "../../style/layout";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    ...layout.containerWithPadding
  },
  personnalBudgetContainer: {
    paddingTop: 26,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  infoIcon: {
    marginRight: 6,
    marginLeft: 6
  },
  worldBudgetContainer: {
    flex: 1,
    marginVertical: 20
  },
  worldExampleTitle: {
    flex: 1,
    marginBottom: 8
  },
  worldExampleItem: {
    marginBottom: 4
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: PADDING_HORIZONTAL,
    left: PADDING_HORIZONTAL
  },
  slider: {
    marginTop: 14
  }
});
