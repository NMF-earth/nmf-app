import React from "react";
import { create } from "react-test-renderer";

import PeriodBudget from "../PeriodBudget";

const props = {
  period: "this month",
  periodEmissionsBudget: 760,
};

jest.unmock("../PeriodBudget");

it("PeriodBudget renders correctly", () => {
  const tree = create(<PeriodBudget {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("PeriodBudget renders correctly if tons", () => {
  const tree = create(<PeriodBudget periodEmissionsBudget={14340} {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
