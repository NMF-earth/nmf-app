import { pipe, filter, map, sum } from "ramda";
import { budget, emissions } from "../../../ducks";
import { EmissionEnum } from "../../../interfaces";
import { calculation } from "../../../utils";

const getAllEmissions = emissions.selectors.getAllEmissions;

const isTransportEmission = emission =>
  emission.emissionType === EmissionEnum.transport;
const isFoodEmission = emission => emission.emissionType === EmissionEnum.food;
const isCustomEmission = emission =>
  emission.emissionType === EmissionEnum.custom;

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

const getTransportCarbonValue = pipe(getTransportEmissions, getCarbonValue);
const getFoodCarbonValue = pipe(getFoodEmissions, getCarbonValue);
const getCustomCarbonValue = pipe(getCustomEmissions, getCarbonValue);

const getAllCarbonValue = state =>
  getTransportCarbonValue(state) +
  getFoodCarbonValue(state) +
  getCustomCarbonValue(state);

export default {
  getMonthlyCarbonBudget: budget.selectors.getMonthlyCarbonBudget,
  getTransportCarbonValue,
  getFoodCarbonValue,
  getCustomCarbonValue,
  getAllCarbonValue
};

// TODO: write tests
