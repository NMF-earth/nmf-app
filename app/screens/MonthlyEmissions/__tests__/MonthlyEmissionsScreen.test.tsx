import "react-native";
import React from "react";
import { create } from "react-test-renderer";
import { FoodType, TransportType } from "carbon-footprint";
import * as reactRedux from "react-redux";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";

import { selectors } from "../ducks";
import MonthlyEmissions from "../MonthlyEmissionsScreen";

const emissionNotMitigatedOld: Emission = {
  id: "3",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: Emission = {
  id: "1",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: Emission = {
  id: "12",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

const state = {
  [emissions.namespace]: [emissionNotMitigated, emissionMitigated, emissionNotMitigatedOld],
};

describe("<MonthlyEmissions />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  test("render", () => {
    useSelectorMock
      .mockImplementationOnce(() => 200)
      .mockImplementationOnce(() => [
        ...selectors.getEmissions(state, new Date("2020-03-01T12:08:16.623Z").toISOString()),
      ]);

    const wrapper = create(<MonthlyEmissions />);
    expect(wrapper).toMatchSnapshot();
  });
});
