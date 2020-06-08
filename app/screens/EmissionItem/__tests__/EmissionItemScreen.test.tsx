import React from "react";
import renderer from "react-test-renderer";
import EmissionItemScreen from "../EmissionItemScreen";

it("EmissionsScreen renders correctly", () => {
  const tree = renderer.create(<EmissionItemScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
