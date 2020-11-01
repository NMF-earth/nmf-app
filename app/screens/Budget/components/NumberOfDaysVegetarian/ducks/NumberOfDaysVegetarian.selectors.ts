import { pipe, propOr, includes, filter, isEmpty, not } from "ramda";
import moment from "moment";
import { FoodEnum } from "carbon-footprint";

import { emissions } from "ducks";
import { calculation } from "utils";

const meatArray = [
  FoodEnum.beef,
  FoodEnum.chicken,
  FoodEnum.fish,
  FoodEnum.lamb,
  FoodEnum.pork,
  FoodEnum.redMeat,
  FoodEnum.tuna,
  FoodEnum.turkey,
  FoodEnum.whiteMeat,
];

const isMeatEmission = (emission) =>
  includes(emission.emissionModelType, meatArray);

const getCreationDate = propOr(moment().utc().toISOString(), "creationDate");
const getDaysElapsedSinceToday = (date) => moment().diff(date, "days");

const getFoodEmissions = emissions.selectors.getFoodEmissions;
const getMeatEmissions = pipe(getFoodEmissions, filter(isMeatEmission));
const isAnyMeatEmissionSaved = pipe(getMeatEmissions, isEmpty, not);

const getLatestEmission = calculation.getLatestEmission;
const getDaysSinceEmission = (emission) =>
  pipe(getCreationDate, moment, getDaysElapsedSinceToday)(emission);

const getDaysWithoutEatingMeat = (state) =>
  pipe(getMeatEmissions, getLatestEmission, getDaysSinceEmission)(state);

export default {
  isAnyMeatEmissionSaved,
  getDaysWithoutEatingMeat,
};
