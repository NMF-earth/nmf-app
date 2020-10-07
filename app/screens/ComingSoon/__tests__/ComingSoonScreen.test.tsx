import React from "react";
import { create } from "react-test-renderer";

import ComingSoonScreen from "../ComingSoonScreen";

it("ComingSoonScreen renders correctly", () => {
  const tree = create(<ComingSoonScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
