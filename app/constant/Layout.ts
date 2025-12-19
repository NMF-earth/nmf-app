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

// Standard Android Bottom Tab Bar height (typically 56dp) plus a small 4dp buffer. We must use a hardcoded value here because the dynamic useBottomTabBarHeight hook causes a crash when used outside the Tab Navigator context (which is the case with our Native Tabs setup)
const ANDROID_TAB_BAR_HEIGHT = 60;

export { screen, isSmallDevice, PADDING_HORIZONTAL, SPACING, ANDROID_TAB_BAR_HEIGHT };
