import { StyleSheet } from "react-native";

import { Layout } from "constant";

const button = {
  flex: 1,
  marginBottom: 20,
};
export default StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttonLeft: {
    ...button,
    marginLeft: Layout.PADDING_HORIZONTAL,
    marginRight: Layout.PADDING_HORIZONTAL / 2,
  },
  buttonRight: {
    ...button,
    marginRight: Layout.PADDING_HORIZONTAL,
    marginLeft: Layout.PADDING_HORIZONTAL / 2,
  },
});
