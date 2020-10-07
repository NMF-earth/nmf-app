import { StyleSheet } from "react-native";

import { PADDING_HORIZONTAL } from "../../constants/Layout";
import { platform } from "../../utils";
import { Colors } from "../colors";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
  },
  androidNavTitle: {
    paddingLeft: platform.isAndroid ? 6 : 0,
  },
  separator: {
    width: PADDING_HORIZONTAL,
  },
});
