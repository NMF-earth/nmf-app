import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PADDING_HORIZONTAL = 14;

const isSmallDevice = width < 375;

const screen = {
  width,
  height,
};

export { screen, isSmallDevice, PADDING_HORIZONTAL };
