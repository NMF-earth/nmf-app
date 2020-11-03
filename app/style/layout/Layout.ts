import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { platform } from "utils";

import { Colors } from "../colors";

export default StyleSheet.create({
  containerNoPadding: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerWithPadding: {
    flex: 1,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
  },
  androidNavTitle: {
    paddingLeft: platform.isAndroid ? 6 : 0,
  },
  separator: {
    width: Layout.PADDING_HORIZONTAL,
  },
});
