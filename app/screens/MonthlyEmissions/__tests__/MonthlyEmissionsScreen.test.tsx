import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { FoodType, TransportType } from "carbon-footprint";
import * as reactRedux from "react-redux";

import { emissions, userPreferences } from "ducks";
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
    useSelectorMock.mockImplementation(userPreferences.selectors.getUseMetricUnits);
  });

  test("render", () => {
    useSelectorMock
      .mockImplementationOnce(() => 200)
      .mockImplementationOnce(() => [
        ...selectors.getEmissions(state, new Date("2020-03-01T12:08:16.623Z").toISOString()),
      ]);

    const stripReactInternals = (node: unknown): unknown => {
      if (!node) return node;
      if (Array.isArray(node)) {
        return node.map(stripReactInternals);
      }
      if (typeof node === "object") {
        const newNode = { ...node };

        // Remove volatile and internal keys
        const blockedKeys = [
          "actualDuration",
          "actualStartTime",
          "selfBaseDuration",
          "treeBaseDuration",
          "_owner",
          "_store",
          "return",
          "alternate",
          "child",
          "sibling",
          "stateNode"
        ];

        blockedKeys.forEach(key => delete newNode[key]);

        // Recursively clean all remaining properties
        Object.keys(newNode).forEach((key) => {
          newNode[key] = stripReactInternals(newNode[key]);
        });

        return newNode;
      }
      return node;
    };

    const wrapper = render(<MonthlyEmissions />);
    expect(stripReactInternals(wrapper.toJSON())).toMatchSnapshot();
  });
});
