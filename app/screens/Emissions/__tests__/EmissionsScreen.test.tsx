import React from "react";
import { create } from "react-test-renderer";
import { FoodType, TransportType } from "carbon-footprint";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";

import { selectors } from "../ducks";
import EmissionsScreen from "../EmissionsScreen";

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

const props = {
  emissions: selectors.getEmissions(state),
};

it("EmissionsScreen renders correctly", () => {
  const tree = create(<EmissionsScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("EmissionsScreen renders correctly if no emissions", () => {
  const tree = create(<EmissionsScreen {...props} emissions={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
