import { StyleSheet } from "react-native";
import { screen } from "../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginVertical: 20,
    alignSelf: "center",
    maxWidth: 320,
    width: "100%",
    height: screen.width - 100,
  },
});

export default styles;
