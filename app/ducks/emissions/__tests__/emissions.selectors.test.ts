import {
  FoodType,
  MealType,
  TransportType,
  StreamingType,
  PurchaseType,
  FashionType,
  ElectricityType,
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

const emissionMeal: Emission = {
  id: "8",
  creationDate: "2020-01-26T11:04:55.334Z",
  emissionModelType: MealType.highMeat,
  emissionType: EmissionType.meal,
  isMitigated: false,
  value: 20,
};

const emissionProductScanned: Emission = {
  id: "9",
  creationDate: "2020-01-29T11:04:55.334Z",
  emissionModelType: "productScanned",
  emissionType: EmissionType.productScanned,
  isMitigated: false,
  value: 100,
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
        emissionMeal,
        emissionProductScanned,
      ],
    };
  });

  test("`getEmissionById` should return no emission", () =>
    expect(emissions.selectors.getEmissionById(state, "1")).toEqual(emissionFood));

  test("`getEmissionsMitigated` should return mitigated emissions", () =>
    expect(emissions.selectors.getEmissionsMitigated(state)).toEqual([emissionMitigated]));

  test("`getEmissionsToMitigate` should return emissions to mitigate", () =>
    expect(emissions.selectors.getEmissionsToMitigate(state)).toEqual([
      emissionFood,
      emissionCustom,
      emissionTransport,
      emissionStreaming,
      emissionElectricity,
      emissionFashion,
      emissionPurchase,
      emissionMeal,
      emissionProductScanned,
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

  test("`getPurchaseEmissions` should return purchase emissions", () =>
    expect(emissions.selectors.getPurchaseEmissions(state)).toEqual([emissionPurchase]));

  test("`getFashionEmissions` should return fashion emissions", () =>
    expect(emissions.selectors.getFashionEmissions(state)).toEqual([emissionFashion]));

  test("`getMealEmissions` should return meal emissions", () =>
    expect(emissions.selectors.getMealEmissions(state)).toEqual([emissionMeal]));

  test("`getEatableEmissions` should return meal & food emissions", () =>
    expect(emissions.selectors.getEatableEmissions(state)).toEqual([
      emissionMitigated,
      emissionFood,
      emissionMeal,
    ]));

  test("`getProductScanned` should return product scanned emissions", () =>
    expect(emissions.selectors.getProductScanned(state)).toEqual([emissionProductScanned]));
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

  test("`getMealEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getMealEmissions(state)).toEqual([]));

  test("`getProductScanned` should return mitigated no emission", () =>
    expect(emissions.selectors.getProductScanned(state)).toEqual([]));

  test("`getEatableEmissions` should return mitigated no emission", () =>
    expect(emissions.selectors.getEatableEmissions(state)).toEqual([]));
});
