import { StyleSheet } from "react-native";

import { Layout as ConstantsLayout } from "constant";

import { Layout } from "../../style";

const button = {
  flex: 1,
  marginBottom: 20,
};
export default StyleSheet.create({
  container: {
    ...Layout.containerNoPadding,
  },
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttonLeft: {
    ...button,
    marginLeft: ConstantsLayout.PADDING_HORIZONTAL,
    marginRight: ConstantsLayout.PADDING_HORIZONTAL / 2,
  },
  buttonRight: {
    ...button,
    marginRight: ConstantsLayout.PADDING_HORIZONTAL,
    marginLeft: ConstantsLayout.PADDING_HORIZONTAL / 2,
  },
  textNoEmission: {
    paddingVertical: 20,
  },
  separator: {
    height: 100,
  },
});
