import React from "react";
import { render } from "@testing-library/react-native";

import BudgetScreen from "../BudgetScreen";

it("BudgetScreen renders correctly", () => {
  const tree = render(<BudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: add test to verify that monthly budget is opened
