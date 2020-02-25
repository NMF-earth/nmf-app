import { selectors } from "../";
import emissions from "../../../../ducks/emissions";
import { Emission as EmissionType, EmissionEnum } from "../../../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";
import moment from "moment";
import { calculation } from "../../../../utils";

let state;

const emissionToday: EmissionType = {
  id: "1",
  creationDate: moment()
    .utc()
    .toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10
};

const emissionLastMonth: EmissionType = {
  id: "12",
  creationDate: moment()
    .subtract(1, "month")
    .utc()
    .toISOString(),
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionEnum.transport,
  isMitigated: false,
  value: 100
};

const emissionLastYear: EmissionType = {
  id: "123",
  creationDate: moment()
    .subtract(1, "year")
    .utc()
    .toISOString(),
  emissionModelType: FoodEnum.cheese,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 5
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionToday,
        emissionLastMonth,
        emissionLastYear
      ]
    };
  });

  test("`getCurrentMonthFoodCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthFoodCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionToday)
    ));

  test("`getCurrentMonthAllCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentMonthAllCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionToday)
    ));

  test("`getCurrentMonthCustomCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentMonthCustomCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthTransportCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentMonthTransportCarbonValue(state)).toEqual(0));

  test("`getCurrentYearFoodCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearFoodCarbonValue(state)).toEqual(
      calculation.getC02ValueFromEmission(emissionToday)
    ));

  test("`getCurrentYearAllCarbonValue` should return CO2 value from today's emission", () =>
    expect(selectors.getCurrentYearAllCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionToday)) +
        Math.round(calculation.getC02ValueFromEmission(emissionLastMonth))
    ));

  test("`getCurrentYearCustomCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentYearCustomCarbonValue(state)).toEqual(0));

  test("`getCurrentYearTransportCarbonValue` should return CO2 values from today's emission", () =>
    expect(selectors.getCurrentYearTransportCarbonValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromEmission(emissionLastMonth))
    ));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: []
    };
  });

  test("`getCurrentMonthFoodCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthFoodCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthAllCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthAllCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthCustomCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthCustomCarbonValue(state)).toEqual(0));

  test("`getCurrentMonthTransportCarbonValue` should return 0", () =>
    expect(selectors.getCurrentMonthTransportCarbonValue(state)).toEqual(0));

  test("`getCurrentYearFoodCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearFoodCarbonValue(state)).toEqual(0));

  test("`getCurrentYearAllCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearAllCarbonValue(state)).toEqual(0));

  test("`getCurrentYearCustomCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearCustomCarbonValue(state)).toEqual(0));

  test("`getCurrentYearTransportCarbonValue` should return 0", () =>
    expect(selectors.getCurrentYearTransportCarbonValue(state)).toEqual(0));
});
