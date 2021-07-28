import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  scrollContainer: {
    borderTopColor: Colors.green10,
    borderTopWidth: 2,
  },
});

export default styles;
