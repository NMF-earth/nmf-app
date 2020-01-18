import emissions from "../";
import { Emission, EmissionEnum } from "../../../interfaces";
import { version } from "carbon-footprint";

let state;

const emissionToMitigate: Emission = {
  id: Date.now(),
  creationDate: "now",
  co2eqKilograms: 10,
  co2eqModelVersion: version.co2eqModel,
  emissionType: EmissionEnum.custom,
  isMitigated: false
};

const emissionMitigated: Emission = {
  ...emissionToMitigate,
  isMitigated: true
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: {
        list: [emissionMitigated, emissionToMitigate]
      }
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
      [emissions.namespace]: {
        list: []
      }
    };
  });

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([]));

  test("`getEmissionsToMitigate` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([]));
});
