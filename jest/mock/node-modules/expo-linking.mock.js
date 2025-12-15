module.exports = {
    createURL: jest.fn((path) => `exp://localhost:19000/${path}`),
    parse: jest.fn(() => ({ path: "", queryParams: {} })),
    parseInitialURLAsync: jest.fn(() => Promise.resolve({ path: "", queryParams: {} })),
    getInitialURL: jest.fn(() => Promise.resolve(null)),
    addEventListener: jest.fn(() => ({ remove: jest.fn() })),
    openURL: jest.fn(() => Promise.resolve()),
    canOpenURL: jest.fn(() => Promise.resolve(true)),
    useURL: jest.fn(() => null),
};
