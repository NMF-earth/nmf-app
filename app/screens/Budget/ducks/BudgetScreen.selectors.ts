import { pipe, filter, map, sum } from "ramda";
import moment from "moment";

import { budget, emissions } from "ducks";
import { calculation } from "utils";

const isEmissionInCurrentMonth = (emission) =>
  moment(emission.creationDate).isSame(new Date(), "month") &&
  moment(emission.creationDate).isSame(new Date(), "year");
const isEmissionInCurrentYear = (emission) =>
  moment(emission.creationDate).isSame(new Date(), "year");

const getCarbonValue = pipe(
  map(calculation.getC02ValueFromEmission),
  sum,
  Math.round
);

const getCurrentMonthEmissions = filter(isEmissionInCurrentMonth);

const getCurrentMonthTransportCarbonValue = pipe(
  emissions.selectors.getTransportEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthFoodCarbonValue = pipe(
  emissions.selectors.getFoodEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthOtherCarbonValue = pipe(
  emissions.selectors.getOtherEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);

const getCurrentYearEmissions = filter(isEmissionInCurrentYear);

const getCurrentYearTransportCarbonValue = pipe(
  emissions.selectors.getTransportEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearFoodCarbonValue = pipe(
  emissions.selectors.getFoodEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearOtherCarbonValue = pipe(
  emissions.selectors.getOtherEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);

const getCurrentMonthAllCarbonValue = (state) =>
  getCurrentMonthTransportCarbonValue(state) +
  getCurrentMonthFoodCarbonValue(state) +
  getCurrentMonthOtherCarbonValue(state);

const getCurrentYearAllCarbonValue = (state) =>
  getCurrentYearTransportCarbonValue(state) +
  getCurrentYearFoodCarbonValue(state) +
  getCurrentYearOtherCarbonValue(state);

export default {
  getMonthlyCarbonBudget: budget.selectors.getMonthlyCarbonBudget,
  getCurrentMonthTransportCarbonValue,
  getCurrentMonthFoodCarbonValue,
  getCurrentMonthOtherCarbonValue,
  getCurrentMonthAllCarbonValue,
  getCurrentYearTransportCarbonValue,
  getCurrentYearFoodCarbonValue,
  getCurrentYearOtherCarbonValue,
  getCurrentYearAllCarbonValue,
};
