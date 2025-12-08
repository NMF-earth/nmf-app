import React from "react";
import { render } from "@testing-library/react-native";

import TabBarIcon from "../TabBarIcon";

it("renders correctly", () => {
  const tree = render(<TabBarIcon focused={false} name="ios-information-circle" />).toJSON();
  expect(tree).toMatchSnapshot();
});
