import React from "react";
import renderer from "react-test-renderer";

import AboutScreen from "../AboutScreen";

it("AboutScreen renders correctly", () => {
  const tree = renderer.create(<AboutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
