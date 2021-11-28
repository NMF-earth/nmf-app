import { FoodType, TransportType } from "carbon-footprint";
import moment from "moment";

import { recurringEmissions } from "ducks";
import { RecurringEmission, PeriodicityType, EmissionType } from "interfaces";
import { calculation, ui } from "utils";

import { selectors } from "../";

let state;

const date = moment("2021-06-24T03:24:00").toISOString();

const recurringEmission: RecurringEmission = {
  id: "1",
  creationDate: date,
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  value: 30,
  times: 1,
  periodType: PeriodicityType.monthly,
  weekDays: [],
};

const recurringEmissionBis: RecurringEmission = {
  id: "1",
  creationDate: date,
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  value: 30,
  times: 1,
  periodType: PeriodicityType.weekly,
  weekDays: [1],
};

describe("if there are recurring emissions", () => {
  beforeEach(() => {
    state = {
      [recurringEmissions.namespace]: [recurringEmission, recurringEmissionBis],
    };
  });

  test("`getRecurringEmissions` should return the emissions of the month related to the date sent", () => {
    expect(JSON.stringify(selectors.getAllRecurringEmissions(state))).toEqual(
      JSON.stringify([
        {
          ...recurringEmission,
          title: ui.getTranslationEmissionModelType(recurringEmission.emissionModelType),
          co2value: calculation.getC02ValueFromEmission(recurringEmission),
          iconName: ui.getIconFromModelType(recurringEmission.emissionModelType),
        },
        {
          ...recurringEmissionBis,
          title: ui.getTranslationEmissionModelType(recurringEmissionBis.emissionModelType),
          co2value: calculation.getC02ValueFromEmission(recurringEmissionBis),
          iconName: ui.getIconFromModelType(recurringEmissionBis.emissionModelType),
        },
      ])
    );
  });
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [recurringEmissions.namespace]: [],
    };
  });

  test("`getEmissions` should return empty array", () =>
    expect(selectors.getAllRecurringEmissions(state)).toEqual([]));
});
