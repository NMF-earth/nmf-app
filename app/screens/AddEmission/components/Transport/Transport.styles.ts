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
  },
  track: {
    height: 2,
    borderRadius: 1
  },
  thumb: {
    width: SIZE_THUMB_SLIDER,
    height: SIZE_THUMB_SLIDER,
    borderRadius: SIZE_THUMB_SLIDER / 2,
    backgroundColor: colors.linkGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35
  }
});
