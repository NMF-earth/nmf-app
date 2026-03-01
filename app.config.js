//TODO: check if this import is needed, since secrets are in eas, it might not be the case
import "dotenv/config";

const buildNumber = 52;

module.exports = () => {
  return {
    name: "NMF.earth",
    plugins: [
      "expo-localization",
      "expo-asset",
      "expo-font",
      "expo-web-browser",
      ["expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera",
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
          "recordAudioAndroid": true
        }
      ],
      "@react-native-community/datetimepicker",
      ["@sentry/react-native/expo", {
        "organization": process.env.SENTRY_ORG || "nmf",
        "project": process.env.SENTRY_PROJECT || "nmf-earth",
      }],
      "expo-sharing"
    ],
    slug: "not-my-fault-earth",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.11.0",
    orientation: "portrait",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      icon: "./assets/images/ios.icon.png",
      bundleIdentifier: "nmf.earth",
      supportsTablet: true,
      buildNumber: buildNumber.toString(),
    },
    android: {
      icon: "./assets/images/android.icon.png",
      package: "nmf.earth",
      versionCode: buildNumber,
    },

    extra: {
      eas: {
        projectId: "9e1873d6-966a-49a3-83bc-10254ac6fb27"
      }
    },
    experiments: {
      reactCompiler: true
    }
  };
};
