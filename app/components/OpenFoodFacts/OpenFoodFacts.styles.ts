import { StyleSheet } from "react-native";

import { Layout } from "constant";

const maxHeight = 60;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    paddingVertical: 28,
  },
  imageContainer: {
    flex: 1,
  },
  mainImageContainer: {
    paddingTop: 14,
    flexDirection: "row",
    maxHeight,
  },
  image: {
    alignSelf: "center",
    maxHeight,
    width: "100%",
  },
});

export default styles;
