jest.mock("react-native-svg", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const svg = require("./react-native-svg.mock");

  return svg;
});

jest.mock("react-native-slider", () => "Slider");

jest.mock("@expo/vector-icons", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icons = require("./vector-icons.mock");

  return icons;
});
