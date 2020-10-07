import { FoodEnum } from "carbon-footprint";

import moment from "moment";

import emissions from "ducks/emissions";

import { selectors } from "../";
import {
  Emission as EmissionType,
  EmissionEnum,
} from "../../../../../../interfaces";

let state;

const emissionToday: EmissionType = {
  id: "1",
  creationDate: moment().utc().toISOString(),
  emissionModelType: FoodEnum.redMeat,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10,
};

const emissionLastWeek: EmissionType = {
  id: "12",
  creationDate: moment().subtract(1, "week").utc().toISOString(),
  emissionModelType: FoodEnum.redMeat,
  emissionType: EmissionEnum.food,
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
