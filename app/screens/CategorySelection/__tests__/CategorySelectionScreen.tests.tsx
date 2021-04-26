import React from "react";
import { create } from "react-test-renderer";

import CategorySelectionScreen from "../CategorySelectionScreen";

it("CategorySelectionScreen renders correctly", () => {
  const tree = create(<CategorySelectionScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
