import React from "react";
import { render } from "@testing-library/react-native";

import SubCategorySelectionScreen from "../SubCategorySelectionScreen";

it("SubCategorySelectionScreen renders correctly", () => {
  const tree = render(<SubCategorySelectionScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
