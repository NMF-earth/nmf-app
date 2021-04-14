import { StyleSheet } from "react-native";

import { Layout as ConstantsLayout } from "constant";
import { Layout } from "style";

const VERTICAL_PADDING_BETWEEN_ITEMS = 12;
const separationContainers = {
  paddingVertical: VERTICAL_PADDING_BETWEEN_ITEMS,
};

export default StyleSheet.create({
  typeContainer: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
    ...Layout.containerWithPadding,
  },
  tagContainer: {
    paddingLeft: ConstantsLayout.PADDING_HORIZONTAL,
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
  },
  durationContainer: {
    ...Layout.containerWithPadding,
    ...separationContainers,
  },
  totalContainer: {
    ...Layout.containerWithPadding,
    ...separationContainers,
  },
  miniHeader: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
  },
  slider: {
    height: 40,
    marginHorizontal: 16,
  },
  separator: {
    ...Layout.separator,
  },
});
