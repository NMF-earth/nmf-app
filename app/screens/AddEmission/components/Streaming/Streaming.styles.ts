import { StyleSheet } from "react-native";

import { Layout } from "../../../../style";
import { PADDING_HORIZONTAL } from "../../../../constants/Layout";

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
    paddingLeft: PADDING_HORIZONTAL,
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
  },
  durationDistanceContainer: {
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
