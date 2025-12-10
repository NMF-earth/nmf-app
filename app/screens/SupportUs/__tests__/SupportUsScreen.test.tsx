import React from "react";
import { render } from "@testing-library/react-native";

import SupportUsScreen from "../SupportUsScreen";

it("SupportUsScreen renders correctly", () => {
  const tree = render(<SupportUsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
