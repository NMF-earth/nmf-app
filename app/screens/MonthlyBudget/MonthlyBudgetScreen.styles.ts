import { StyleSheet } from "react-native";
import { Layout } from "../../style";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding
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
    marginBottom: 16
  },
  worldExampleItem: {
    marginBottom: 6
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: PADDING_HORIZONTAL,
    left: PADDING_HORIZONTAL
  },
  slider: {
    marginTop: 14
  },
  parisAgreement: {
    marginTop: 16,
    marginBottom: 80
  }
});
