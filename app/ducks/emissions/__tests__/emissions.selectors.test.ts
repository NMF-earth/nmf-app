import emissions from "../";
import { Emission as EmissionType, EmissionEnum } from "../../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";

let state;

const emissionFood: EmissionType = {
  id: "1",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodEnum.redMeat,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10
};

const emissionTransport: EmissionType = {
  id: "2",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: TransportEnum.bus,
  emissionType: EmissionEnum.transport,
  isMitigated: false,
  value: 13
};

const emissionCustom: EmissionType = {
  id: "3",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: "custom",
  emissionType: EmissionEnum.custom,
  isMitigated: false,
  value: 100
};

const emissionMitigated: EmissionType = {
  ...emissionFood,
  id: "4",
  isMitigated: true
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionMitigated,
        emissionFood,
        emissionCustom,
        emissionTransport
      ]
    };
  });

  test("`getEmissionById` should return no emission", () =>
    expect(emissions.selectors.getEmissionById(state, "1")).toEqual(
      emissionFood
    ));

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([
      emissionMitigated
    ]));

  test("`getEmissionsToMitigate` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([
      emissionFood,
      emissionCustom,
      emissionTransport
    ]));

  test("`getCustomEmissions` should return mitigated emissions", () =>
    expect(emissions.selectors.getCustomEmissions(state)).toEqual([
      emissionCustom
    ]));

  test("`getFoodEmissions` should return mitigated emissions", () =>
    expect(emissions.selectors.getFoodEmissions(state)).toEqual([
      emissionMitigated,
      emissionFood
    ]));

  test("`getTransportEmissions` should return mitigated emissions", () =>
    expect(emissions.selectors.getTransportEmissions(state)).toEqual([
      emissionTransport
    ]));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: []
    };
  });

  test("`getEmissionById` should return no emission", () =>
    expect(emissions.selectors.getEmissionById(state, "1")).toEqual(undefined));

  test("`getEmissionsMitigated` should return mitigated no emission", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([]));

  test("`getEmissionsToMitigate` should return mitigated no emission", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([]));

  test("`getCustomEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getCustomEmissions(state)).toEqual([]));

  test("`getFoodEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getFoodEmissions(state)).toEqual([]));

  test("`getTransportEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getTransportEmissions(state)).toEqual([]));
});
