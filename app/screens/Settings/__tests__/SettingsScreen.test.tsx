import React from "react";
import renderer from "react-test-renderer";
import SettingsScreen from "../SettingsScreen";

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

it("SettingsScreen renders correctly", () => {
  const tree = renderer.create(<SettingsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
