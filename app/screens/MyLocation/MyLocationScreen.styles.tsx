import { StyleSheet } from "react-native";
import { Layout } from "../../style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  intro: {
    paddingTop: 30,
  },
  carbonIntensityContainer: {
    flexDirection: "row",
  },
  carbonIntensity: {
    paddingVertical: 20,
  },
});

export default styles;
