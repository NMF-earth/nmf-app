import React from "react";
import { create } from "react-test-renderer";
import { FoodEnum, TransportEnum } from "carbon-footprint";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";

import { selectors } from "../../../ducks";
import EmissionsList from "../EmissionsList";

jest.unmock("../EmissionsList");

const emissionNotMitigatedOld: Emission = {
  id: "3",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: Emission = {
  id: "1",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: Emission = {
  id: "12",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

const state = {
  [emissions.namespace]: [
    emissionNotMitigated,
    emissionMitigated,
    emissionNotMitigatedOld,
  ],
};

const props = {
  emissions: selectors.getEmissions(state),
  monthlyCarbonBudget: 24,
  navigator: {
    push: () => {
      // do nothing.
    },
    navigate: () => {
      // do nothing.
    },
  },
};

it("EmissionsList renders correctly", () => {
  const tree = create(<EmissionsList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsList renders correctly if no emissions", () => {
  const tree = create(<EmissionsList {...props} emissions={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
