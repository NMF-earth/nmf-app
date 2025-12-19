import { useSafeAreaInsets } from "react-native-safe-area-context";

import { platform } from "utils";
import { Layout } from "constant";

export const useTabBarBottomPadding = (): number => {
    const insets = useSafeAreaInsets();
    return platform.isAndroid ? Layout.ANDROID_TAB_BAR_HEIGHT + insets.bottom : 0;
};
