import { StyleSheet } from "react-native";
import colors from "../../../../style/colors";
import layout from "../../../../style/layout";
import { PADDING_HORIZONTAL } from "../../../../constants/Layout";

const SIZE_THUMB_SLIDER = 20;
const VERTICAL_PADDING_BETWEEN_ITEMS = 12;
const separationContainers = {
  paddingVertical: VERTICAL_PADDING_BETWEEN_ITEMS
};

export default StyleSheet.create({
  typeContainer: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
    ...layout.containerWithPadding
  },
  tagContainer: {
    paddingLeft: PADDING_HORIZONTAL,
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS
  },
  durationContainer: {
    ...layout.containerWithPadding,
    ...separationContainers
  },
  totalContainer: {
    ...layout.containerWithPadding,
    ...separationContainers
  },
  miniHeader: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS
  },
  slider: {
    height: 40,
    marginHorizontal: 24
  }
});
