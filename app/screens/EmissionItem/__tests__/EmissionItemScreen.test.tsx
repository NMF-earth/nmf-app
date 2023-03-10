import React from "react";
import MockDate from "mockdate";
import { create } from "react-test-renderer";
import * as reactRedux from "react-redux";

import { userPreferences } from "ducks";

import EmissionItemScreen from "../EmissionItemScreen";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockImplementationOnce(userPreferences.selectors.getUseMetricUnits);
});

it("EmissionsScreen renders correctly", () => {
  const nowString = "2021-02-21T21:21:21";
  MockDate.set(nowString);
  const tree = create(<EmissionItemScreen />).toJSON();
  MockDate.reset();
  expect(tree).toMatchSnapshot();
});
