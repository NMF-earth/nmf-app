import React from "react";

// Create host components for Universal Test Renderer
const createHostComponent = (name) => {
    const Component = React.forwardRef((props, ref) => {
        const { children, ...otherProps } = props;
        return React.createElement(name, { ...otherProps, ref }, children);
    });
    Component.displayName = name;
    return Component;
};

// Export React Native core components
export const View = createHostComponent("View");
export const Text = createHostComponent("Text");
export const TouchableOpacity = createHostComponent("TouchableOpacity");
export const TouchableWithoutFeedback = createHostComponent("TouchableWithoutFeedback");
export const ScrollView = createHostComponent("ScrollView");
export const Image = createHostComponent("Image");
Image.resolveAssetSource = jest.fn((source) => source);
Image.getSize = jest.fn((uri, success) => success(100, 100));
export const TextInput = createHostComponent("TextInput");
export const FlatList = createHostComponent("FlatList");
export const SectionList = createHostComponent("SectionList");

export const ActivityIndicator = createHostComponent("ActivityIndicator");
export const Modal = createHostComponent("Modal");
export const Switch = createHostComponent("Switch");

// Mock StyleSheet
export const StyleSheet = {
    create: (styles) => styles,
    flatten: (style) => style,
};

// Mock Platform
export const Platform = {
    OS: "ios",
    select: (obj) => obj.ios || obj.default,
};

// Mock Dimensions
export const Dimensions = {
    get: () => ({ width: 375, height: 667 }),
};

// Mock other commonly used exports
export const Animated = {
    View: createHostComponent("AnimatedView"),
    Text: createHostComponent("AnimatedText"),
    createAnimatedComponent: (component) => component,
    Value: class {
        constructor(value) {
            this._value = value;
            this.animVal = this;
        }
        setValue(value) {
            this._value = value;
        }
        interpolate(config) {
            return this;
        }
        addListener() { }
        removeListener() { }
        removeAllListeners() { }
    },
    timing: () => ({ start: () => { } }),
    spring: () => ({ start: () => { } }),
    decay: () => ({ start: () => { } }),
    event: () => { },
    parallel: () => ({ start: () => { } }),
    sequence: () => ({ start: () => { } }),
};

export const Easing = {
    linear: () => { },
    ease: () => { },
    quad: () => { },
    cubic: () => { },
};

// Mock Linking
export const Linking = {
    openURL: jest.fn(() => Promise.resolve()),
    canOpenURL: jest.fn(() => Promise.resolve(true)),
    getInitialURL: jest.fn(() => Promise.resolve(null)),
};

// Mock Appearance
export const Appearance = {
    getColorScheme: jest.fn(() => "light"),
    addChangeListener: jest.fn(),
    removeChangeListener: jest.fn(),
};
