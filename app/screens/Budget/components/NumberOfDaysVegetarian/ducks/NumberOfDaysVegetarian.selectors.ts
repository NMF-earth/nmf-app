import { pipe } from "ramda";
import { emissions } from "../../../../../ducks";
import { calculation } from "../../../../../utils";

const getFoodEmissions = emissions.selectors.getFoodEmissions;
const getLatestEmission = calculation.getLatestEmission;
const getDaysSinceEmission = () => 8;

const getDaysWithoutEatingMeat = state =>
  pipe(getFoodEmissions, getLatestEmission, getDaysSinceEmission)(state);

export default {
  getDaysWithoutEatingMeat
};
