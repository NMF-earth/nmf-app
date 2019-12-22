import React from "react";
import renderer from "react-test-renderer";
import MonthlyBudgetScreen from "../MonthlyBudgetScreen";

it("MonthlyBudgetScreen renders correctly", () => {
  const tree = renderer.create(<MonthlyBudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
