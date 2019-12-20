import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const SIZE_THUMB_SLIDER = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  slider: {
    flex: 1,
    marginTop: 14,
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
