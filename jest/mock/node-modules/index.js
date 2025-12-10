/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
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

jest.mock("react-native-keyboard-aware-scroll-view", () => {
  const createMock = require("../../utils").createMock;

  return {
    KeyboardAwareScrollView: createMock("KeyboardAwareScrollView"),
  };
});

jest.mock("react-native-safe-area-context", () => {
  const React = require("react");
  return {
    SafeAreaView: React.forwardRef(({ children, ...props }, ref) => {
      return React.createElement("SafeAreaView", { ...props, ref }, children);
    }),
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
    SafeAreaProvider: ({ children }) => children,
  };
});

jest.mock("react-native-globalize", () => {
  const createMock = require("../../utils").createMock;

  return {
    GlobalizeProvider: createMock("GlobalizeProvider"),
    FormattedNumber: createMock("FormattedNumber"),
  };
});

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useFocusEffect: jest.fn(),
    useRoute: () => ({ params: {} }),
  };
});

jest.mock("@react-navigation/stack", () => {
  return {
    TransitionPresets: {
      FadeFromBottomAndroid: {},
      SlideFromRightIOS: {},
    },
  };
});

jest.mock("@react-navigation/core", () => {
  return {
    useRoute: () => jest.fn(),
  };
});

// React Native core components (for Universal Test Renderer)
jest.mock("react-native", () => require("./react-native"));

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

jest.mock("expo-notifications", () => {
  return {
    requestPermissionsAsync: () => ({
      status: "denied",
    }),
  };
});

jest.mock("expo-web-browser", () => {
  return {
    openBrowserAsync: jest.fn(() => Promise.resolve({ type: "cancel" })),
    dismissBrowser: jest.fn(),
  };
});

jest.mock("expo-store-review", () => {
  return {
    isAvailableAsync: jest.fn(() => Promise.resolve(true)),
    requestReview: jest.fn(() => Promise.resolve()),
  };
});

jest.mock("expo-document-picker", () => {
  return {
    getDocumentAsync: jest.fn(() => Promise.resolve({ type: "cancel" })),
  };
});

jest.mock("expo-sharing", () => {
  return {
    isAvailableAsync: jest.fn(() => Promise.resolve(true)),
    shareAsync: jest.fn(() => Promise.resolve()),
  };
});

jest.mock("expo-file-system", () => {
  return {
    documentDirectory: "file:///",
    cacheDirectory: "file:///cache/",
    readAsStringAsync: jest.fn(() => Promise.resolve("")),
    writeAsStringAsync: jest.fn(() => Promise.resolve()),
    deleteAsync: jest.fn(() => Promise.resolve()),
    getInfoAsync: jest.fn(() => Promise.resolve({ exists: false })),
    makeDirectoryAsync: jest.fn(() => Promise.resolve()),
  };
});

jest.mock("react-native-gesture-handler", () => {
  const createMock = require("../../utils").createMock;

  return {
    Switch: createMock("Switch"),
    GestureHandlerRootView: createMock("GestureHandlerRootView"),
    Swipeable: createMock("Swipeable"),
    DrawerLayout: createMock("DrawerLayout"),
    State: {},
    PanGestureHandler: createMock("PanGestureHandler"),
    TapGestureHandler: createMock("TapGestureHandler"),
    FlingGestureHandler: createMock("FlingGestureHandler"),
    ForceTouchGestureHandler: createMock("ForceTouchGestureHandler"),
    LongPressGestureHandler: createMock("LongPressGestureHandler"),
    PinchGestureHandler: createMock("PinchGestureHandler"),
    RotationGestureHandler: createMock("RotationGestureHandler"),
    RawButton: createMock("RawButton"),
    BaseButton: createMock("BaseButton"),
    RectButton: createMock("RectButton"),
    BorderlessButton: createMock("BorderlessButton"),
    FlatList: createMock("FlatList"),
    gestureHandlerRootHOC: jest.fn((component) => component),
    Directions: {},
  };
});

jest.mock("react-native-modal-datetime-picker", () => {
  const createMock = require("../../utils").createMock;
  return createMock("DateTimePickerModal");
});
