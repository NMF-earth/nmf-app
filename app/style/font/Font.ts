import { Layout } from "constant";

const FontWeight = {
  Black: "Inter-Black",
  Bold: "Inter-Bold",
  Light: "Inter-Light-BETA",
  Medium: "Inter-Medium",
};

const FontSizeNormalDevice = {
  H1: 28,
  H2: 26,
  H3: 22,
  Primary: 18,
  Secondary: 16,
  Tertiary: 14,
};

const FontSizeSmallDevice = {
  H1: 22,
  H2: 20,
  H3: 18,
  Primary: 16,
  Secondary: 14,
  Tertiary: 12,
};

const FontSize = Layout.isSmallDevice
  ? FontSizeSmallDevice
  : FontSizeNormalDevice;

const Font = { FontWeight, FontSize };

export { Font };
