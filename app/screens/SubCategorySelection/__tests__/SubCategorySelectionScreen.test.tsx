import React from "react";
import { create } from "react-test-renderer";

import SubCategorySelectionScreen from "../SubCategorySelectionScreen";

it("SubCategorySelectionScreen renders correctly", () => {
  const tree = create(<SubCategorySelectionScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
