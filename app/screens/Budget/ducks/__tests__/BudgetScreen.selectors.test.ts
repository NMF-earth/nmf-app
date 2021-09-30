import {
  FoodType,
  MealType,
  TransportType,
  StreamingType,
  PurchaseType,
  FashionType,
  ElectricityType,
} from "carbon-footprint";
import moment from "moment";

import { emissions } from "ducks";
import { Emission, EmissionType } from "interfaces";
import { calculation } from "utils";

import { selectors } from "../";

let state;

const emissionFood: Emission = {
  id: "1",
  creationDate: moment().utc().toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 11,
};

const emissionMeal: Emission = {
  id: "2",
  creationDate: moment().utc().toISOString(),
  emissionModelType: MealType.highMeat,
  emissionType: EmissionType.meal,
  isMitigated: false,
  value: 12,
};

const emissionTransport: Emission = {
  id: "3",
  creationDate: moment().utc().toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: false,
  value: 13000,
};

const emissionStreaming: Emission = {
  id: "4",
  creationDate: moment().utc().toISOString(),
  emissionModelType: StreamingType.ultraHDVideo,
  emissionType: EmissionType.streaming,
  isMitigated: false,
  value: 14000,
};

const emissionPurchase: Emission = {
  id: "5",
  creationDate: moment().utc().toISOString(),
  emissionModelType: PurchaseType.computer,
  emissionType: EmissionType.purchase,
  isMitigated: false,
  value: 15,
};

const emissionFashion: Emission = {
  id: "6",
  creationDate: moment().utc().toISOString(),
  emissionModelType: FashionType.coat,
  emissionType: EmissionType.fashion,
  isMitigated: false,
  value: 16,
};

const emissionElectricity: Emission = {
  id: "7",
  creationDate: moment().utc().toISOString(),
  emissionModelType: ElectricityType.argentina,
  emissionType: EmissionType.electricity,
  isMitigated: false,
  value: 17000000,
};

const emissionProductScanned: Emission = {
  id: "8",
  creationDate: moment().utc().toISOString(),
  emissionModelType: "productScanned",
  emissionType: EmissionType.productScanned,
  isMitigated: false,
  value: 18,
};

const emissionCustom: Emission = {
  id: "9",
  creationDate: moment().utc().toISOString(),
  emissionModelType: "custom",
  emissionType: EmissionType.custom,
  isMitigated: false,
  value: 19,
};

//year

const emissionFoodYear: Emission = {
  id: "11",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: FoodType.beans,
  emissionType: EmissionType.food,
  isMitigated: false,
  value: 11,
};

const emissionMealYear: Emission = {
  id: "12",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: MealType.highMeat,
  emissionType: EmissionType.meal,
  isMitigated: false,
  value: 12,
};

const emissionTransportYear: Emission = {
  id: "13",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: TransportType.boat,
  emissionType: EmissionType.transport,
  isMitigated: false,
  value: 13000,
};

const emissionStreamingYear: Emission = {
  id: "14",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: StreamingType.ultraHDVideo,
  emissionType: EmissionType.streaming,
  isMitigated: false,
  value: 14000,
};

const emissionPurchaseYear: Emission = {
  id: "15",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: PurchaseType.computer,
  emissionType: EmissionType.purchase,
  isMitigated: false,
  value: 15,
};

const emissionFashionYear: Emission = {
  id: "16",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: FashionType.coat,
  emissionType: EmissionType.fashion,
  isMitigated: false,
  value: 16,
};

const emissionElectricityYear: Emission = {
  id: "17",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: ElectricityType.argentina,
  emissionType: EmissionType.electricity,
  isMitigated: false,
  value: 17000000,
};

const emissionProductScannedYear: Emission = {
  id: "18",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: "productScanned",
  emissionType: EmissionType.productScanned,
  isMitigated: false,
  value: 18,
};

const emissionCustomYear: Emission = {
  id: "19",
  creationDate: moment().startOf("year").utc().toISOString(),
  emissionModelType: "custom",
  emissionType: EmissionType.custom,
  isMitigated: false,
  value: 19,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionFood,
        emissionMeal,
        emissionTransport,
        emissionStreaming,
        emissionPurchase,
        emissionFashion,
        emissionElectricity,
        emissionProductScanned,
        emissionCustom,
        emissionFoodYear,
        emissionMealYear,
        emissionTransportYear,
        emissionStreamingYear,
        emissionPurchaseYear,
        emissionFashionYear,
        emissionElectricityYear,
        emissionProductScannedYear,
        emissionCustomYear,
      ],
    };
  });

  test("`getCurrentMonthAllCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthAllCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionFood)) +
        Math.round(calculation.getC02ValueFromEmission(emissionMeal)) +
        Math.round(calculation.getC02ValueFromEmission(emissionTransport)) +
        Math.round(calculation.getC02ValueFromEmission(emissionStreaming)) +
        Math.round(calculation.getC02ValueFromEmission(emissionPurchase)) +
        Math.round(calculation.getC02ValueFromEmission(emissionFashion)) +
        Math.round(calculation.getC02ValueFromEmission(emissionElectricity)) +
        Math.round(calculation.getC02ValueFromEmission(emissionProductScanned)) +
        Math.round(calculation.getC02ValueFromEmission(emissionCustom))
    ));

  test("`getCurrentMonthFoodCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthFoodCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionFood))
    ));

  test("`getCurrentMonthMealCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthMealCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionMeal))
    ));

  test("`getCurrentMonthTransportCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentMonthTransportCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionTransport))
    ));

  test("`getCurrentMonthStreamingCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthStreamingCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionStreaming))
    ));

  test("`getCurrentMonthPurchaseCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthPurchaseCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionPurchase)
    ));

  test("`getCurrentMonthFashionCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthFashionCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionFashion)
    ));

  test("`getCurrentMonthElectricityCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthElectricityCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionElectricity))
    ));

  test("`getCurrentMonthProductScannedCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthProductScannedCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionProductScanned)
    ));

  test("`getCurrentMonthCustomCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthCustomCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionCustom)
    ));

  // last year

  test("`getCurrentYearAllCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearAllCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionFood)) +
        Math.round(calculation.getC02ValueFromEmission(emissionMeal)) +
        Math.round(calculation.getC02ValueFromEmission(emissionTransport)) +
        Math.round(calculation.getC02ValueFromEmission(emissionStreaming)) +
        Math.round(calculation.getC02ValueFromEmission(emissionPurchase)) +
        Math.round(calculation.getC02ValueFromEmission(emissionFashion)) +
        Math.round(calculation.getC02ValueFromEmission(emissionElectricity)) +
        Math.round(calculation.getC02ValueFromEmission(emissionProductScanned)) +
        Math.round(calculation.getC02ValueFromEmission(emissionCustom)) +
        Math.round(calculation.getC02ValueFromEmission(emissionFoodYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionMealYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionTransportYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionStreamingYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionPurchaseYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionFashionYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionElectricityYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionProductScannedYear)) +
        Math.round(calculation.getC02ValueFromEmission(emissionCustomYear))
    ));

  test("`getCurrentYearFoodCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearFoodCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionFood) +
          calculation.getC02ValueFromEmission(emissionFoodYear)
      )
    ));

  test("`getCurrentYearMealCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearMealCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionMeal) +
          calculation.getC02ValueFromEmission(emissionMealYear)
      )
    ));

  test("`getCurrentYearTransportCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentYearTransportCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionTransport) +
          calculation.getC02ValueFromEmission(emissionTransportYear)
      )
    ));

  test("`getCurrentYearStreamingCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearStreamingCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionStreaming) +
          calculation.getC02ValueFromEmission(emissionStreamingYear)
      )
    ));

  test("`getCurrentYearPurchaseCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearPurchaseCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionPurchase) +
          calculation.getC02ValueFromEmission(emissionPurchaseYear)
      )
    ));

  test("`getCurrentYearFashionCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearFashionCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionFashion) +
          calculation.getC02ValueFromEmission(emissionFashionYear)
      )
    ));

  test("`getCurrentYearElectricityCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearElectricityCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionElectricity) +
          calculation.getC02ValueFromEmission(emissionElectricityYear)
      )
    ));

  test("`getCurrentYearProductScannedCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearProductScannedCarbonValue(state)).toEqual(
      Math.round(
        calculation.getC02ValueFromEmission(emissionProductScanned) +
          calculation.getC02ValueFromEmission(emissionProductScannedYear)
      )
    ));

  test("`getCurrentYearCustomCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearCustomCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionCustom) +
        calculation.getC02ValueFromEmission(emissionCustomYear)
    ));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
    };
  });

  test("`getCurrentMonthFoodCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthFoodCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthMealCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthMealCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthTransportCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthTransportCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthStreamingCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthStreamingCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthPurchaseCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthPurchaseCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthFashionCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthFashionCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthElectricityCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthElectricityCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthProductScannedCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthProductScannedCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthCustomCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthCustomCarbonValue(state)).toEqual(0));

  //year
  test("`getCurrentYearFoodCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearFoodCarbonValue(state)).toEqual(0));

  test("`getCurrentYearMealCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearMealCarbonValue(state)).toEqual(0));

  test("`getCurrentYearTransportCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearTransportCarbonValue(state)).toEqual(0));

  test("`getCurrentYearStreamingCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearStreamingCarbonValue(state)).toEqual(0));

  test("`getCurrentYearPurchaseCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearPurchaseCarbonValue(state)).toEqual(0));

  test("`getCurrentYearFashionCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearFashionCarbonValue(state)).toEqual(0));

  test("`getCurrentYearElectricityCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearElectricityCarbonValue(state)).toEqual(0));

  test("`getCurrentYearProductScannedCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearProductScannedCarbonValue(state)).toEqual(0));

  test("`getCurrentYearCustomCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearCustomCarbonValue(state)).toEqual(0));

  test("`getCurrentYearAllCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearAllCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthAllCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthAllCarbonValue(state)).toEqual(0));
});
