import { FoodType } from "carbon-footprint";
import moment from "moment";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";

import { selectors } from "../";

let state;

const emissionToday: Emission = {
  id: "1",
  creationDate: moment().utc().toISOString(),
  emissionModelType: FoodType.redMeat,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionLastWeek: Emission = {
  id: "12",
  creationDate: moment().subtract(1, "week").utc().toISOString(),
  emissionModelType: FoodType.redMeat,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 100,
};

describe("if there is one meat emission today", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emissionToday, emissionLastWeek],
    };
  });

  it("getDaysWithoutEatingMeat should return 0", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(0);
  });
});

describe("if there are emissions from last week", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emissionLastWeek],
    };
  });

  it("getDaysWithoutEatingMeat", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(7);
  });

  it("isAnyMeatEmissionSaved should return true", () => {
    expect(selectors.isAnyMeatEmissionSaved(state)).toEqual(true);
  });
});

describe("if there is no meat emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
    };
  });

  it("getDaysWithoutEatingMeat should return 0", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(0);
  });

  it("isAnyMeatEmissionSaved should return false", () => {
    expect(selectors.isAnyMeatEmissionSaved(state)).toEqual(false);
  });
});
