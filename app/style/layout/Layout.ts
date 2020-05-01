import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { platform } from "../../utils";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1,
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  androidNavTitle: {
    paddingLeft: platform.isAndroid ? 6 : 0,
  },
  separator: {
    width: PADDING_HORIZONTAL,
  },
});
