import { StyleSheet } from "react-native";
import { Colors } from "../../style";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.white
  },
  hiddenBtn: {
    marginTop: 8,
    marginHorizontal: 10
  },
  imageContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: "50%"
  },
  appVersionTitle: {
    textAlign: "center",
    color: Colors.swordGray,
  },
});
