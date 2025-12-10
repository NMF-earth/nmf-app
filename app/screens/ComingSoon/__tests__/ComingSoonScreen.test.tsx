import React from "react";
import { render } from "@testing-library/react-native";

import ComingSoonScreen from "../ComingSoonScreen";

it("ComingSoonScreen renders correctly", () => {
  const tree = render(<ComingSoonScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
