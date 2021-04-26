import { StyleSheet } from "react-native";

import { Layout } from "style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  info: {
    paddingTop: 20,
    paddingBottom: 16,
  },
});

export default styles;
