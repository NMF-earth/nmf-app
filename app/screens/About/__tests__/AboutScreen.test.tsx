import React from "react";
import { render } from "@testing-library/react-native";

import AboutScreen from "../AboutScreen";

it("AboutScreen renders correctly", () => {
  const tree = render(<AboutScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
