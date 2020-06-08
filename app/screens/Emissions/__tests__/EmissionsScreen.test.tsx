import React from "react";
import renderer from "react-test-renderer";
import EmissionsScreen from "../EmissionsScreen";

it("EmissionsScreen renders correctly", () => {
  const tree = renderer.create(<EmissionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
