import React from "react";
import { create } from "react-test-renderer";
import constants from "expo-constants";

import BarCodeScanScreen from "../BarCodeScanScreen";

beforeAll(() => {
  constants.expoConfig = {
    version: "0.0.1",
    name: "name",
    slug: "slug",
    ios:{
      buildNumber:"42"
    },
    android:{
      versionCode:42
    }
  };
});


it("BarCodeScanScreen renders correctly", () => {
  const tree = create(<BarCodeScanScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

//TODO : do better tests in different state
