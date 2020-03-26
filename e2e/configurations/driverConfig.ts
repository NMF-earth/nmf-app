import wd from "wd";
import {
  iphoneDevice,
  iphoneSimulator,
  androidGalaxyS8,
  androidEmulator
} from "./capabilityConfig";

const port = 4723;
const driver = wd.promiseChainRemote("localhost", port);
const touchAction = new wd.TouchAction(driver);
const asserters = wd.asserters;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const deviceTypeAndState = process.env.DEVICE.split(".");

// Function to check device type and state which could be physical or virtual
const checkDeviceTypeAndState = () => {
  if (!process.env.DEVICE) {
    throw new Error("DEVICE environment variable is not defined");
  }
  if (deviceTypeAndState[0] === "android") {
    if (deviceTypeAndState[1] === "emulator") {
      return androidEmulator;
    } else {
      return androidGalaxyS8;
    }
  }
  if (deviceTypeAndState[0] === "iphone") {
    if (deviceTypeAndState[1] === "simulator") {
      return iphoneSimulator;
    } else {
      return iphoneDevice;
    }
  }
};

const capability = checkDeviceTypeAndState();

beforeAll(async () => {
  await driver.init(capability);
});

export { driver, asserters, capability, touchAction };
