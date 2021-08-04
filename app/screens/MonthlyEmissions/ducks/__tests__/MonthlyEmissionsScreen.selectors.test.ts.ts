import { FoodType, TransportType } from "carbon-footprint";
import moment from "moment";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";
import { calculation, ui } from "utils";

import { selectors } from "../";

let state;

const date = moment("2021-06-24T03:24:00").toISOString();
const christmas = moment("2020-12-24T03:24:00").toISOString();

const emission: Emission = {
  id: "1",
  creationDate: date,
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionBis: Emission = {
  id: "3",
  creationDate: date,
  emissionModelType: FoodType.cheese,

  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionXmas: Emission = {
  id: "12",
  creationDate: christmas,
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emission, emissionBis, emissionXmas],
    };
  });

  test("`getEmissions` should return the emissions of the month related to the date sent", () => {
    expect(JSON.stringify(selectors.getEmissions(state, date))).toEqual(
      JSON.stringify([
        {
          ...emission,
          title: ui.getTranslationEmissionModelType(emission.emissionModelType),
          co2value: calculation.getC02ValueFromEmission(emission),
          iconName: ui.getIconFromModelType(emission.emissionModelType),
        },
        {
          ...emissionBis,
          title: ui.getTranslationEmissionModelType(emissionBis.emissionModelType),
          co2value: calculation.getC02ValueFromEmission(emissionBis),
          iconName: ui.getIconFromModelType(emissionBis.emissionModelType),
        },
      ])
    );
  });
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
    };
  });

  test("`getEmissions` should return empty array", () =>
    expect(selectors.getEmissions(state, date)).toEqual([]));
});
