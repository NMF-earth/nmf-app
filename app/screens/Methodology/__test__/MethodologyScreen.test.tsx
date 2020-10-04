import React from "react";
import renderer from "react-test-renderer";
import MethodologyScreen from "../MethodologyScreen";

it("MethodologyScreen renders correctly", () => {
  const tree = renderer.create(<MethodologyScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
