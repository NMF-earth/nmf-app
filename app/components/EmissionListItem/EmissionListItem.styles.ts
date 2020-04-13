import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { Colors } from "../../style";

const CIRCLE_WIDTH = 34;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: PADDING_HORIZONTAL * 2 + CIRCLE_WIDTH,
  },
  icon: {
    marginHorizontal: PADDING_HORIZONTAL,
  },
  iconContainer: {
    position: "absolute",
    marginLeft: PADDING_HORIZONTAL / 2,
    marginRight: PADDING_HORIZONTAL / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    position: "absolute",
    backgroundColor: Colors.linkGreen + "20",
    borderRadius: CIRCLE_WIDTH / 2,
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
  },
});
