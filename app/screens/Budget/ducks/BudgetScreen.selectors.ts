import { pipe, filter, map, sum } from "ramda";
import { budget, emissions } from "../../../ducks";
import { EmissionEnum } from "../../../interfaces";
import { calculation } from "../../../utils";
import moment from "moment";

const getAllEmissions = emissions.selectors.getAllEmissions;

const isTransportEmission = emission =>
  emission.emissionType === EmissionEnum.transport;
const isFoodEmission = emission => emission.emissionType === EmissionEnum.food;
const isCustomEmission = emission =>
  emission.emissionType === EmissionEnum.custom;
const isEmissionInCurrentMonth = emission =>
  moment(emission.creationDate).isSame(new Date(), "month") &&
  moment(emission.creationDate).isSame(new Date(), "year");
const isEmissionInCurrentYear = emission =>
  moment(emission.creationDate).isSame(new Date(), "year");

const getTransportEmissions = pipe(
  getAllEmissions,
  filter(isTransportEmission)
);
const getFoodEmissions = pipe(getAllEmissions, filter(isFoodEmission));
const getCustomEmissions = pipe(getAllEmissions, filter(isCustomEmission));

const getCarbonValue = pipe(
  map(calculation.getC02ValueFromEmission),
  sum,
  Math.round
);

const getCurrentMonthEmissions = filter(isEmissionInCurrentMonth);

const getCurrentMonthTransportCarbonValue = pipe(
  getTransportEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthFoodCarbonValue = pipe(
  getFoodEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);
const getCurrentMonthCustomCarbonValue = pipe(
  getCustomEmissions,
  getCurrentMonthEmissions,
  getCarbonValue
);

const getCurrentYearEmissions = filter(isEmissionInCurrentYear);

const getCurrentYearTransportCarbonValue = pipe(
  getTransportEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearFoodCarbonValue = pipe(
  getFoodEmissions,
  getCurrentYearEmissions,
  getCarbonValue
);
const getCurrentYearCustomCarbonValue = pipe(
  getCustomEmissions,
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

// TODO: write tests
