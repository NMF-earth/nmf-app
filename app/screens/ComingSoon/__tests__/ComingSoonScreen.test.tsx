import React from "react";
import renderer from "react-test-renderer";
import ComingSoonScreen from "../ComingSoonScreen";

it("ComingSoonScreen renders correctly", () => {
  const tree = renderer.create(<ComingSoonScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
