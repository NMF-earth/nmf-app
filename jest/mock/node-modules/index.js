jest.mock("react-native-svg", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const svg = require("./react-native-svg.mock");

  return svg;
});

jest.mock("@expo/vector-icons", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icons = require("./vector-icons.mock");

  return icons;
});

jest.mock("react-redux", () => {
  const createMock = require("../../utils").createMock;

  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(),
    connect: () => (component) => component,
    Provider: createMock("Provider"),
  };
});

jest.mock("react-native-render-html", () => {
  const createMock = require("../../utils").createMock;

  return createMock("HTML");
});

jest.mock("react-native-globalize", () => {
  const createMock = require("../../utils").createMock;

  return {
    FormattedProvider: createMock("FormattedProvider"),
    FormattedNumber: createMock("FormattedNumber"),
  };
});

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: () => jest.fn(),
    createNavigatorFactory: () => jest.fn,
    StackActions: {
      popToTop: jest.fn(),
    },
  };
});

jest.mock("@react-navigation/core", () => {
  return {
    useRoute: () => jest.fn(),
  };
});

jest.mock("expo-constants", () => {
  return {
    manifest: {
      version: "0.0.1",
      ios: {
        buildNumber: 42,
      },
    },
  };
});
