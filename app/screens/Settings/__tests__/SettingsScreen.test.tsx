import React from "react";
import { create } from "react-test-renderer";

import SettingsScreen from "../SettingsScreen";

it("SettingsScreen renders correctly", () => {
  const tree = create(<SettingsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
