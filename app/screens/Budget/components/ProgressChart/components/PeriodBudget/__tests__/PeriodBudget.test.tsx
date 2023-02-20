import React from "react";
import { create } from "react-test-renderer";
import * as reactRedux from "react-redux";

import { userPreferences } from "ducks";

import PeriodBudget from "../PeriodBudget";

const props = {
  period: "this month",
  periodEmissionsBudget: 760,
};

jest.unmock("../PeriodBudget");

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockImplementation(userPreferences.selectors.getUseMetricUnits);
});

it("PeriodBudget renders correctly", () => {
  const tree = create(<PeriodBudget {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("PeriodBudget renders correctly if tons", () => {
  const tree = create(<PeriodBudget periodEmissionsBudget={14340} {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
