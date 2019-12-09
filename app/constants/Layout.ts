import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const isSmallDevice = width < 375;

const screen = {
  width,
  height
};

export { screen, isSmallDevice };
