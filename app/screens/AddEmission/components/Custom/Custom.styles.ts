import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../../style";

const SIZE_THUMB_SLIDER = 20;
const VERTICAL_PADDING_BETWEEN_ITEMS = 12;

export default StyleSheet.create({
  container: {
    paddingBottom: VERTICAL_PADDING_BETWEEN_ITEMS,
    ...Layout.containerWithPadding
  },
  header: {
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
    backgroundColor: Colors.linkGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35
  }
});
