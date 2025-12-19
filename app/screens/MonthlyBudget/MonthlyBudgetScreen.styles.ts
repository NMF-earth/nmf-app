import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  personnalBudgetContainer: {
    paddingTop: 26,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoIcon: {
    marginRight: 6,
    marginLeft: 6,
  },
  worldBudgetContainer: {
    flex: 1,
    marginVertical: 20,
  },
  worldExampleTitle: {
    flex: 1,
    marginBottom: 16,
  },
  worldExampleItem: {
    marginBottom: 6,
  },
  buttonContainer: {
    marginTop: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  slider: {
    marginTop: 14,
  },
  parisAgreement: {
    marginTop: 16,
  },
});

