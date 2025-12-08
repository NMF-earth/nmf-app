import React from "react";
import { render } from "@testing-library/react-native";

import CategorySelectionScreen from "../CategorySelectionScreen";

it("CategorySelectionScreen renders correctly", () => {
  const tree = render(<CategorySelectionScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
