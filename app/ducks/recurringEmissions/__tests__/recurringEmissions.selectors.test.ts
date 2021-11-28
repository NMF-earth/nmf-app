import { FoodType, TransportType } from "carbon-footprint";

import { RecurringEmission, EmissionType, PeriodicityType, WeekDays } from "interfaces";

import recurringEmissions from "../";

let state;

const recurringEmissionFood: RecurringEmission = {
  id: "1",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodType.redMeat,
  emissionType: EmissionType.food,
  value: 10,
  periodType: PeriodicityType.weekly,
  weekDays: [WeekDays.friday],
  times: 1,
};

const recurringEmissionTransport: RecurringEmission = {
  id: "2",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: TransportType.bus,
  emissionType: EmissionType.transport,
  value: 13,
  periodType: PeriodicityType.weekly,
  weekDays: [WeekDays.friday],
  times: 1,
};

describe("if there are recurring emissions", () => {
  beforeEach(() => {
    state = {
      [recurringEmissions.namespace]: [recurringEmissionFood, recurringEmissionTransport],
    };
  });

  test("`getRecurringEmissionById` should return recurring emission with corresponding id", () =>
    expect(recurringEmissions.selectors.getRecurringEmissionById(state, "1")).toEqual(
      recurringEmissionFood
    ));

  test("`getAllRecurringEmissions` should return all recurring emissions", () =>
    expect(recurringEmissions.selectors.getAllRecurringEmissions(state)).toEqual([
      recurringEmissionFood,
      recurringEmissionTransport,
    ]));
});

describe("if there are no recurring emissions", () => {
  beforeEach(() => {
    state = {
      [recurringEmissions.namespace]: [],
    };
  });

  test("`getEmissionById` should return no recurring emission", () =>
    expect(recurringEmissions.selectors.getRecurringEmissionById(state, "1")).toEqual(undefined));

  test("`getAllRecurringEmissions` should return no recurring emission", () =>
    expect(recurringEmissions.selectors.getAllRecurringEmissions(state)).toEqual([]));
});
