import { StyleSheet } from "react-native";

import { Layout } from "constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginVertical: 20,
    alignSelf: "center",
    maxWidth: 320,
    width: "100%",
    height: Layout.screen.width - 100,
  },
});

export default styles;
