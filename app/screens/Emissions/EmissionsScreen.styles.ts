import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "../../constants/Layout";

const button = {
  flex: 1,
  marginBottom: 20,
};
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  buttonLeft: {
    ...button,
    marginLeft: PADDING_HORIZONTAL,
    marginRight: PADDING_HORIZONTAL / 2,
  },
  buttonRight: {
    ...button,
    marginRight: PADDING_HORIZONTAL,
    marginLeft: PADDING_HORIZONTAL / 2,
  },
  textNoEmission: {
    paddingVertical: 20,
  },
  separator: {
    height: 100,
  },
});
