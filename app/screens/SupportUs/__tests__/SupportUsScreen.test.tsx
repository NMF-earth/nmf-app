import React from "react";
import renderer from "react-test-renderer";

import SupportUsScreen from "../SupportUsScreen";

it("SupportUsScreen renders correctly", () => {
  const tree = renderer.create(<SupportUsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
