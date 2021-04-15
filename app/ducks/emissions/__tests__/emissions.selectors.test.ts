import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  FashionType,
  PurchaseType,
} from "carbon-footprint";

import { Emission, EmissionType } from "interfaces";

import emissions from "../";

let state;

const emissionFood: Emission = {
  id: "1",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: FoodType.redMeat,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 10,
};

const emissionTransport: Emission = {
  id: "2",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: TransportType.bus,
  emissionType: EmissionType.transport,
  isMitigated: false,
  value: 13,
};

const emissionCustom: Emission = {
  id: "3",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: "custom",
  emissionType: EmissionType.custom,
  isMitigated: false,
  value: 100,
};

const emissionStreaming: Emission = {
  id: "4",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: StreamingType.HDVideo,
  emissionType: EmissionType.streaming,
  isMitigated: false,
  value: 23.32,
};

const emissionElectricity: Emission = {
  id: "4",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: ElectricityType.france,
  emissionType: EmissionType.electricity,
  isMitigated: false,
  value: 1000,
};

const emissionMitigated: Emission = {
  ...emissionFood,
  id: "5",
  isMitigated: true,
};

const emissionPurchase: Emission = {
  id: "6",
  creationDate: "2020-02-22T11:04:55.334Z",
  emissionModelType: PurchaseType.computer,
  emissionType: EmissionType.purchase,
  isMitigated: false,
  value: 249,
};

const emissionFashion: Emission = {
  id: "7",
  creationDate: "2020-03-21T11:04:55.334Z",
  emissionModelType: FashionType.coat,
  emissionType: EmissionType.fashion,
  isMitigated: false,
  value: 29,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionMitigated,
        emissionFood,
        emissionCustom,
        emissionTransport,
        emissionStreaming,
        emissionElectricity,
        emissionFashion,
        emissionPurchase,
      ],
    };
  });

  test("`getEmissionById` should return no emission", () =>
    expect(emissions.selectors.getEmissionById(state, "1")).toEqual(emissionFood));

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([emissionMitigated]));

  test("`getEmissionsToMitigate` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([
      emissionFood,
      emissionCustom,
      emissionTransport,
      emissionStreaming,
      emissionElectricity,
      emissionFashion,
      emissionPurchase,
    ]));

  test("`getCustomEmissions` should return custom emissions", () =>
    expect(emissions.selectors.getCustomEmissions(state)).toEqual([emissionCustom]));

  test("`getFoodEmissions` should return food emissions", () =>
    expect(emissions.selectors.getFoodEmissions(state)).toEqual([emissionMitigated, emissionFood]));

  test("`getTransportEmissions` should return transport emissions", () =>
    expect(emissions.selectors.getTransportEmissions(state)).toEqual([emissionTransport]));

  test("`getStreamingEmissions` should return streaming emissions", () =>
    expect(emissions.selectors.getStreamingEmissions(state)).toEqual([emissionStreaming]));

  test("`getElectricityEmissions` should return electricity emissions", () =>
    expect(emissions.selectors.getElectricityEmissions(state)).toEqual([emissionElectricity]));

  test("`getPurchaseEmissions` should return electricity emissions", () =>
    expect(emissions.selectors.getPurchaseEmissions(state)).toEqual([emissionPurchase]));

  test("`getFashionEmissions` should return electricity emissions", () =>
    expect(emissions.selectors.getFashionEmissions(state)).toEqual([emissionFashion]));

  test("`getOtherEmissions` should return streaming and custom emissions", () =>
    expect(emissions.selectors.getOtherEmissions(state)).toEqual([
      emissionCustom,
      emissionStreaming,
      emissionElectricity,
      emissionFashion,
      emissionPurchase,
    ]));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
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

  test("`getStreamingEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getStreamingEmissions(state)).toEqual([]));

  test("`getElectricityEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getElectricityEmissions(state)).toEqual([]));

  test("`getPurchaseEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getPurchaseEmissions(state)).toEqual([]));

  test("`getFashionEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getFashionEmissions(state)).toEqual([]));
});
