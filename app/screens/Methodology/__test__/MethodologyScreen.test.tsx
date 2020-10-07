import React from "react";
import { create } from "react-test-renderer";

import MethodologyScreen from "../MethodologyScreen";

it("MethodologyScreen renders correctly", () => {
  const tree = create(<MethodologyScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
