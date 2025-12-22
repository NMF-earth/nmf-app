import { Platform } from "react-native";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

function getIOSVersion(): number {
    if (isIOS) {
        return parseInt(String(Platform.Version), 10);
    }
    return 0;
}

function isIOS26OrLater(): boolean {
    return getIOSVersion() >= 26;
}

export default { isIOS, isAndroid, getIOSVersion, isIOS26OrLater };
