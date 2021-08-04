/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pipe, propOr, includes, filter, isEmpty, not } from "ramda";
import moment from "moment";
import { FoodType, MealType } from "carbon-footprint";

import { emissions } from "ducks";
import { calculation } from "utils";

const meatArray = [
  FoodType.beef,
  FoodType.chicken,
  FoodType.fish,
  FoodType.lamb,
  FoodType.pork,
  FoodType.redMeat,
  FoodType.tuna,
  FoodType.turkey,
  FoodType.whiteMeat,
  MealType.highMeat,
  MealType.lowMeat,
  MealType.mediumMeat,
  MealType.pescetarian,
];

const isMeatEmission = (emission) => includes(emission.emissionModelType, meatArray);

const getCreationDate = propOr(moment().utc().toISOString(), "creationDate");
const getDaysElapsedSinceToday = (date) => moment().diff(date, "days");

const getEatableEmissions = emissions.selectors.getEatableEmissions;
const getMeatEmissions = pipe(getEatableEmissions, filter(isMeatEmission));
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
