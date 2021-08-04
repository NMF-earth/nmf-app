import React from "react";
import { create } from "react-test-renderer";

import MonthlyBudgetScreen from "../MonthlyBudgetScreen";

it("MonthlyBudgetScreen renders correctly", () => {
  const tree = create(<MonthlyBudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
