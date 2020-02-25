import emissions from "../";
import { Emission as EmissionType, EmissionEnum } from "../../../interfaces";
import { FoodEnum } from "carbon-footprint";

let state;

const emissionToMitigate: EmissionType = {
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10
};

const emissionMitigated: EmissionType = {
  ...emissionToMitigate,
  isMitigated: true
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emissionMitigated, emissionToMitigate]
    };
  });

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([
      emissionMitigated
    ]));

  test("`getEmissionsToMitigate` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([
      emissionToMitigate
    ]));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: []
    };
  });

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([]));

  test("`getEmissionsToMitigate` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([]));
});
