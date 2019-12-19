import React from "react";
import renderer from "react-test-renderer";
import BudgetScreen from "../BudgetScreen";

it("BudgetScreen renders correctly", () => {
  const tree = renderer.create(<BudgetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
