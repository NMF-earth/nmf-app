import { StyleSheet } from "react-native";

import { Layout as ConstantsLayout } from "constant";
import { Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerNoPadding,
  },
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    bottom: ConstantsLayout.PADDING_HORIZONTAL,
    right: ConstantsLayout.PADDING_HORIZONTAL,
    left: ConstantsLayout.PADDING_HORIZONTAL,
  },
  textNoEmission: {
    paddingVertical: 20,
  },
  separator: {
    height: 100,
  },
});
