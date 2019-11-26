import { Platform } from "react-native";

//@ts-ignore
export const isDevMode = __DEV__;
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export default {
  isIOS,
  isAndroid,
  isDevMode
};
