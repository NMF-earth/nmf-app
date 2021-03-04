import { FoodEnum, TransportEnum } from "carbon-footprint";
import moment from "moment";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";
import { calculation } from "utils";

import { selectors } from "../";

let state;

const christmas = moment("2020-12-24T03:24:00");
const monthsAgo = moment().subtract(2, "month");

/* TODO: remove this function copied from selectors file */
const getStartOfMonth = (time) => moment(time).startOf("month").format();

const emissionNotMitigatedOld: Emission = {
  id: "3",
  creationDate: monthsAgo.toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: Emission = {
  id: "1",
  creationDate: christmas.toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: Emission = {
  id: "12",
  creationDate: christmas.toISOString(),
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionNotMitigated,
        emissionMitigated,
        emissionNotMitigatedOld,
      ],
    };
  });

  test("`getEmissions` should return all emissions", () => {
    expect(JSON.stringify(selectors.getEmissions(state))).toEqual(
      JSON.stringify([
        {
          date: getStartOfMonth(emissionNotMitigatedOld.creationDate),
          data: [selectors.getEmissionListItem(emissionNotMitigatedOld)],
          co2value: calculation.getC02ValueFromEmission(
            emissionNotMitigatedOld
          ),
        },
        {
          date: getStartOfMonth(emissionMitigated.creationDate),
          data: [
            selectors.getEmissionListItem(emissionNotMitigated),
            selectors.getEmissionListItem(emissionMitigated),
          ],
          co2value:
            calculation.getC02ValueFromEmission(emissionNotMitigated) +
            calculation.getC02ValueFromEmission(emissionMitigated),
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
    expect(selectors.getEmissions(state)).toEqual([]));
});
