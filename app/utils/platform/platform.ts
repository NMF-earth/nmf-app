import { Platform } from "react-native";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

export default { isIOS, isAndroid };
