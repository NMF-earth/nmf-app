//TODO: check if this import is needed, since secrets are in eas, it might not be the case
import "dotenv/config";

const buildNumber = 51;

module.exports = () => {
  return {
    name: "NMF.earth",
    plugins: [
      "expo-localization",
      "expo-asset",
      "expo-font",
      [ "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera",
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
          "recordAudioAndroid": true
        }
      ]
    ],
    newArchEnabled: true,
    slug: "not-my-fault-earth",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.10.1",
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
    jsEngine: "hermes",
    ios: {
      jsEngine: "jsc",
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
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "nmf",
            project: "nmf-earth",
          },
        },
      ],
    },
    extra: {
      eas: {
        projectId: "9e1873d6-966a-49a3-83bc-10254ac6fb27"
      }
    }
  };
};
