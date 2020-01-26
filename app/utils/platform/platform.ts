import { Platform } from "react-native";

const isDevMode = __DEV__;
const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

export default { isIOS, isAndroid, isDevMode };
