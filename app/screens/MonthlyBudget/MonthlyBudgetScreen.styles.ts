import { StyleSheet } from "react-native";
import { Layout, Colors } from "../../style";

const SIZE_THUMB_SLIDER = 20;

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  sliderAndButtonContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  slider: {
    height: 40,
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
    backgroundColor: Colors.linkGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35
  }
});
