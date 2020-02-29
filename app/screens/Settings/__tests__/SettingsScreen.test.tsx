import React from "react";
import renderer from "react-test-renderer";
import SettingsScreen from "../SettingsScreen";

let props;

it("SettingsScreen renders correctly", () => {
  const tree = renderer.create(<SettingsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
