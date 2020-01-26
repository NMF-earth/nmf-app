import emissions from "../";
import { Emission, EmissionEnum } from "../../../interfaces";
import { TransportEnum } from "carbon-footprint";

let state;

const emissionToMitigate: Emission = {
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: TransportEnum.bus,
  emissionType: EmissionEnum.custom,
  isMitigated: false,
  value: 200,
};

const emissionMitigated: Emission = {
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
