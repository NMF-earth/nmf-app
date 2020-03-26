import path from "path";
import {
  ANDROID_APK_PATH,
  IOS_APP_PATH,
  IOS_IPA_PATH
} from "../utils/constant";

// Write down your the React App folder name '../example-project-folder'
const localRootDir = path.resolve("../example-project-folder");

/* The function will fetch the apk or app path locally or from the Jenkins workspace if the env variable is created **/
export function buildAppPath(appPath) {
  const dir = !process.env.WORKSPACE
    ? localRootDir
    : process.env.PIPELINE_ROOT_DIR;
  const finalPath = `${dir}/${appPath}`;
  return finalPath;
}

export const androidEmulator = {
  platformName: "Android",
  deviceName: "Android Emulator",
  app: buildAppPath(ANDROID_APK_PATH),
  noReset: "true"
};

export const androidGalaxyS8 = {
  platformName: "Android",
  deviceName: "Galaxy S10",
  app: buildAppPath(ANDROID_APK_PATH),
  platformVersion: "9",
  udid: "ce071827ade9c91305"
};

export const iphoneSimulator = {
  platformName: "IOS",
  deviceName: "iPhone 11 Pro Max",
  app: buildAppPath(IOS_APP_PATH),
  automationName: "XCUITest",
  platformVersion: "13.4",
  noReset: "true"
};

export const iphoneDevice = {
  platformName: "IOS",
  deviceName: "iPhone XR",
  app: buildAppPath(IOS_IPA_PATH),
  automationName: "XCUITest",
  platformVersion: "13.4",
  newCommandTimeout: 300,
  autoLaunch: false,
  clearSystemFiles: true,
  noReset: false
};
