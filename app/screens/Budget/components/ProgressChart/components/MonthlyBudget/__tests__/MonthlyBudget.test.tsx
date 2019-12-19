import React from "react";
import renderer from "react-test-renderer";
import MonthlyBudget from "../MonthlyBudget";

const props = {
  monthlyEmissionsBudget: 1000
};

jest.unmock("../MonthlyBudget");

it("MonthlyBudget renders correctly", () => {
  const tree = renderer.create(<MonthlyBudget {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
