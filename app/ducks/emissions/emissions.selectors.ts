/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { filter, propEq, find, pathOr, pipe } from "ramda";

import { EmissionType } from "interfaces";

import { namespace } from "./emissions.slice";

const getAllEmissions = pathOr([], [namespace]);

const getEmissionById = (state, id: string) => find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", false)))(state);

const getEmissionsMitigated = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", true)))(state);

const isTransportEmission = (emission) => emission.emissionType === EmissionType.transport;

const isFoodEmission = (emission) => emission.emissionType === EmissionType.food;

const isPurchaseEmission = (emission) => emission.emissionType === EmissionType.purchase;

const isFashionEmission = (emission) => emission.emissionType === EmissionType.fashion;

const isStreamingEmission = (emission) => emission.emissionType === EmissionType.streaming;

const isElectricityEmission = (emission) => emission.emissionType === EmissionType.electricity;

const isCustomEmission = (emission) => emission.emissionType === EmissionType.custom;

const isMealEmission = (emission) => emission.emissionType === EmissionType.meal;

const isEatableEmission = (emission) =>
  emission.emissionType === EmissionType.meal || emission.emissionType === EmissionType.food;

const isOtherEmission = (emission) =>
  emission.emissionType === EmissionType.custom ||
  emission.emissionType === EmissionType.streaming ||
  emission.emissionType === EmissionType.electricity ||
  emission.emissionType === EmissionType.fashion ||
  emission.emissionType === EmissionType.purchase ||
  emission.emissionType === EmissionType.meal;

const getTransportEmissions = pipe(getAllEmissions, filter(isTransportEmission));

const getFoodEmissions = pipe(getAllEmissions, filter(isFoodEmission));

const getStreamingEmissions = pipe(getAllEmissions, filter(isStreamingEmission));

const getElectricityEmissions = pipe(getAllEmissions, filter(isElectricityEmission));

const getPurchaseEmissions = pipe(getAllEmissions, filter(isPurchaseEmission));

const getFashionEmissions = pipe(getAllEmissions, filter(isFashionEmission));

const getMealEmissions = pipe(getAllEmissions, filter(isMealEmission));

const getEatableEmissions = pipe(getAllEmissions, filter(isEatableEmission));

const getCustomEmissions = pipe(getAllEmissions, filter(isCustomEmission));

const getOtherEmissions = pipe(getAllEmissions, filter(isOtherEmission));

export default {
  getAllEmissions,
  getTransportEmissions,
  getFoodEmissions,
  getStreamingEmissions,
  getElectricityEmissions,
  getFashionEmissions,
  getPurchaseEmissions,
  getCustomEmissions,
  getOtherEmissions,
  getMealEmissions,
  getEatableEmissions,
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated,
};
