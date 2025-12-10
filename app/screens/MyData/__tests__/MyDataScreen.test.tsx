import React from "react";
import { render } from "@testing-library/react-native";

import MyDataScreen from "../MyDataScreen";

it("MyDataScreen renders correctly", () => {
  const tree = render(<MyDataScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
