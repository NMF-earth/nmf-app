import { FoodType, TransportType } from "carbon-footprint";
import moment from "moment";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";
import { calculation, ui } from "utils";

import { selectors } from "../";

let state;

const christmas = moment("2020-12-24T03:24:00");
const monthsAgo = moment().subtract(2, "month");

/* TODO: remove this function copied from selectors file */
const getStartOfMonth = (time) => moment(time).startOf("month").format();

const emissionNotMitigatedOld: Emission = {
  id: "3",
  creationDate: monthsAgo.toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: Emission = {
  id: "1",
  creationDate: christmas.toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: Emission = {
  id: "12",
  creationDate: christmas.toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: true,
  value: 100,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emissionNotMitigated, emissionMitigated, emissionNotMitigatedOld],
    };
  });

  test("`getEmissionListItem` should emission ready to be displayed", () => {
    expect(JSON.stringify(selectors.getEmissionListItem(emissionNotMitigatedOld))).toEqual(
      JSON.stringify({
        ...emissionNotMitigatedOld,
        title: ui.getTranslationEmissionModelType(emissionNotMitigatedOld.emissionModelType),
        co2value: calculation.getC02ValueFromEmission(emissionNotMitigatedOld),
        iconName: ui.getIconFromModelType(emissionNotMitigatedOld.emissionModelType),
      })
    );
  });

  test("`getEmissions` should return all emissions", () => {
    expect(JSON.stringify(selectors.getEmissions(state))).toEqual(
      JSON.stringify([
        {
          date: getStartOfMonth(emissionNotMitigatedOld.creationDate),
          data: [selectors.getEmissionListItem(emissionNotMitigatedOld)],
        },
        {
          date: getStartOfMonth(emissionMitigated.creationDate),
          data: [
            selectors.getEmissionListItem(emissionNotMitigated),
            selectors.getEmissionListItem(emissionMitigated),
          ],
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
