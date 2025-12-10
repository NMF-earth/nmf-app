import React from "react";
import { render } from "@testing-library/react-native";

import MonthlyBudgetScreen from "../MonthlyBudgetScreen";

it("MonthlyBudgetScreen renders correctly", () => {
  const tree = render(<MonthlyBudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
