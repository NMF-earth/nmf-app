import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SPACING = {
  SIMPLE: 8,
  DOUBLE: 16,
  TRIPLE: 24,
};
const PADDING_HORIZONTAL = SPACING.DOUBLE;

const isSmallDevice = width < 375;

const screen = {
  width,
  height,
};

export { screen, isSmallDevice, PADDING_HORIZONTAL, SPACING };
