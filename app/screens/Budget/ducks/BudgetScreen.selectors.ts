/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pipe, filter, map, sum } from "ramda";
import moment from "moment";

import { budget, emissions } from "ducks";
import { calculation } from "utils";

const isEmissionInCurrentMonth = (emission) =>
  moment(emission.creationDate).isSame(new Date(), "month") &&
  moment(emission.creationDate).isSame(new Date(), "year");
const isEmissionInCurrentYear = (emission) =>
  moment(emission.creationDate).isSame(new Date(), "year");

const getCarbonValue = pipe(map(calculation.getC02ValueFromEmission), sum, Math.round);

const getCurrentMonthEmissions = filter(isEmissionInCurrentMonth);

const getCurrentMonthFoodCarbonValue = pipe(
  emissions.selectors.getFoodEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthMealCarbonValue = pipe(
  emissions.selectors.getMealEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthTransportCarbonValue = pipe(
  emissions.selectors.getTransportEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthStreamingCarbonValue = pipe(
  emissions.selectors.getStreamingEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthPurchaseCarbonValue = pipe(
  emissions.selectors.getPurchaseEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthFashionCarbonValue = pipe(
  emissions.selectors.getFashionEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthElectricityCarbonValue = pipe(
  emissions.selectors.getElectricityEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthProductScannedCarbonValue = pipe(
  emissions.selectors.getProductScanned,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthCustomCarbonValue = pipe(
  emissions.selectors.getCustomEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);

const getCurrentYearEmissions = filter(isEmissionInCurrentYear);

const getCurrentYearFoodCarbonValue = pipe(
  emissions.selectors.getFoodEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearMealCarbonValue = pipe(
  emissions.selectors.getMealEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearTransportCarbonValue = pipe(
  emissions.selectors.getTransportEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearStreamingCarbonValue = pipe(
  emissions.selectors.getStreamingEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearPurchaseCarbonValue = pipe(
  emissions.selectors.getPurchaseEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearFashionCarbonValue = pipe(
  emissions.selectors.getFashionEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearElectricityCarbonValue = pipe(
  emissions.selectors.getElectricityEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearProductScannedCarbonValue = pipe(
  emissions.selectors.getProductScanned,
  getCurrentYearEmissions,
  getCarbonValue
);

const getCurrentYearCustomCarbonValue = pipe(
  emissions.selectors.getCustomEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);

const getCurrentMonthAllCarbonValue = (state) =>
  getCurrentMonthFoodCarbonValue(state) +
  getCurrentMonthMealCarbonValue(state) +
  getCurrentMonthTransportCarbonValue(state) +
  getCurrentMonthStreamingCarbonValue(state) +
  getCurrentMonthPurchaseCarbonValue(state) +
  getCurrentMonthFashionCarbonValue(state) +
  getCurrentMonthElectricityCarbonValue(state) +
  getCurrentMonthProductScannedCarbonValue(state) +
  getCurrentMonthCustomCarbonValue(state);

const getCurrentYearAllCarbonValue = (state) =>
  getCurrentYearFoodCarbonValue(state) +
  getCurrentYearMealCarbonValue(state) +
  getCurrentYearTransportCarbonValue(state) +
  getCurrentYearStreamingCarbonValue(state) +
  getCurrentYearPurchaseCarbonValue(state) +
  getCurrentYearFashionCarbonValue(state) +
  getCurrentYearElectricityCarbonValue(state) +
  getCurrentYearProductScannedCarbonValue(state) +
  getCurrentYearCustomCarbonValue(state);

export default {
  getMonthlyCarbonBudget: budget.selectors.getMonthlyCarbonBudget,
  getCurrentMonthFoodCarbonValue,
  getCurrentMonthMealCarbonValue,
  getCurrentMonthTransportCarbonValue,
  getCurrentMonthStreamingCarbonValue,
  getCurrentMonthPurchaseCarbonValue,
  getCurrentMonthFashionCarbonValue,
  getCurrentMonthElectricityCarbonValue,
  getCurrentMonthProductScannedCarbonValue,
  getCurrentMonthCustomCarbonValue,
  getCurrentMonthAllCarbonValue,
  getCurrentYearFoodCarbonValue,
  getCurrentYearMealCarbonValue,
  getCurrentYearTransportCarbonValue,
  getCurrentYearStreamingCarbonValue,
  getCurrentYearPurchaseCarbonValue,
  getCurrentYearFashionCarbonValue,
  getCurrentYearElectricityCarbonValue,
  getCurrentYearProductScannedCarbonValue,
  getCurrentYearCustomCarbonValue,
  getCurrentYearAllCarbonValue,
};
