import { isSmallDevice } from "../../constants/Layout";

const fontWeight = {
  Black: "Inter-Black",
  Bold: "Inter-Bold",
  BoldItalic: "Inter-BoldItalic",
  ExtraBold: "Inter-ExtraBold",
  ExtraBoldItalic: "Inter-ExtraBoldItalic",
  ExtraLight: "Inter-ExtraLight-BETA",
  ExtraLightItalic: "Inter-ExtraLightItalic-BETA",
  Italic: "Inter-Italic",
  Light: "Inter-Light-BETA",
  LightItalic: "Inter-LightItalic-BETA",
  Medium: "Inter-Medium",
  MediumItalic: "Inter-MediumItalic",
  Regular: "Inter-Regular",
  SemiBold: "Inter-SemiBold",
  SemiBoldItalic: "Inter-SemiBoldItalic",
  Thin: "Inter-Thin-BETA",
  ThinItalic: "Inter-ThinItalic-BETA"
};

const fontSizeNormalDevice = {
  H1: 28,
  H2: 26,
  H3: 22,
  Primary: 18,
  Secondary: 16,
  Tertiary: 14
};

const fontSizeSmallDevice = {
  H1: 24,
  H2: 22,
  H3: 20,
  Primary: 16,
  Secondary: 14,
  Tertiary: 12
};

const fontSize = isSmallDevice ? fontSizeSmallDevice : fontSizeNormalDevice;

export { fontWeight, fontSize };
