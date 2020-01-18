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

jest.mock("react-redux", () => {
  const createMock = require("../../utils").createMock;

  return {
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
    connect: () => component => component,
    Provider: createMock("Provider")
  };
});
