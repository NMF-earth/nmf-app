import { pipe, filter, map, sum } from "ramda";
import moment from "moment";
import { budget, emissions } from "../../../ducks";
import { calculation } from "../../../utils";

const isEmissionInCurrentMonth = emission =>
  moment(emission.creationDate).isSame(new Date(), "month") &&
  moment(emission.creationDate).isSame(new Date(), "year");
const isEmissionInCurrentYear = emission =>
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
const getCurrentMonthCustomCarbonValue = pipe(
  emissions.selectors.getCustomEmissions,
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
const getCurrentYearCustomCarbonValue = pipe(
  emissions.selectors.getCustomEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);

const getCurrentMonthAllCarbonValue = state =>
  getCurrentMonthTransportCarbonValue(state) +
  getCurrentMonthFoodCarbonValue(state) +
  getCurrentMonthCustomCarbonValue(state);

const getCurrentYearAllCarbonValue = state =>
  getCurrentYearTransportCarbonValue(state) +
  getCurrentYearFoodCarbonValue(state) +
  getCurrentYearCustomCarbonValue(state);

export default {
  getMonthlyCarbonBudget: budget.selectors.getMonthlyCarbonBudget,
  getCurrentMonthTransportCarbonValue,
  getCurrentMonthFoodCarbonValue,
  getCurrentMonthCustomCarbonValue,
  getCurrentMonthAllCarbonValue,
  getCurrentYearTransportCarbonValue,
  getCurrentYearFoodCarbonValue,
  getCurrentYearCustomCarbonValue,
  getCurrentYearAllCarbonValue
};
