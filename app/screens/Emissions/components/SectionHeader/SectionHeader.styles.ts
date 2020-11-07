import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Colors, ComponentsStyle } from "style";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    backgroundColor: Colors.white,
    ...ComponentsStyle.header,
  },
  text: {
    textTransform: "capitalize",
  },
});

export default styles;
