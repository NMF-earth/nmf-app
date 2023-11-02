import React from "react";
import { create } from "react-test-renderer";
import constants from "expo-constants";

import SettingsScreen from "../SettingsScreen";

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

it("SettingsScreen renders correctly", () => {
  const tree = create(<SettingsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
