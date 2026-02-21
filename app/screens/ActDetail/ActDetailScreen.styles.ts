import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  linkStyle: {
    color: Colors.primary,
    textDecorationLine: "underline",
    textDecorationColor: Colors.primary,
  },
});
