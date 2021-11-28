import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import { FoodType, TransportType } from "carbon-footprint";
import * as reactRedux from "react-redux";

import { emissions } from "ducks";
import { RecurringEmission, PeriodicityType, EmissionType } from "interfaces";

import { selectors } from "../ducks";
import RecurringEmissionsScreen from "../RecurringEmissionsScreen";

const recurringEmission: RecurringEmission = {
  id: "1",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  value: 30,
  periodType: PeriodicityType.monthly,
  weekDays: [],
  times: 1,
};

const recurringEmissionBis: RecurringEmission = {
  id: "2",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  value: 10,
  periodType: PeriodicityType.monthly,
  weekDays: [1, 2],
  times: 2,
};

const state = {
  [emissions.namespace]: [recurringEmission, recurringEmissionBis],
};

describe("<RecurringEmissionsScreen />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  test("render", () => {
    useSelectorMock
      .mockImplementationOnce(() => 200)
      .mockImplementationOnce(() => [...selectors.getAllRecurringEmissions(state)]);

    const wrapper = create(<RecurringEmissionsScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
