import React from "react";
import { create } from "react-test-renderer";

import BudgetScreen from "../BudgetScreen";

it("BudgetScreen renders correctly", () => {
  const tree = create(<BudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: add test to verify that monthly budget is opened
