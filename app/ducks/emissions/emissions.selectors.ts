import { filter, propEq, find, pathOr, pipe } from "ramda";
import { namespace } from "./emissions.slice";
import { EmissionEnum } from "../../interfaces";

const getAllEmissions = pathOr([], [namespace]);

const getEmissionById = (state, id: string) =>
  find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", false)))(state);

const getEmissionsMitigated = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", true)))(state);

const isTransportEmission = (emission) =>
  emission.emissionType === EmissionEnum.transport;

const isFoodEmission = (emission) =>
  emission.emissionType === EmissionEnum.food;

const isCustomEmission = (emission) =>
  emission.emissionType === EmissionEnum.custom;

const getTransportEmissions = pipe(
  getAllEmissions,
  filter(isTransportEmission)
);

const getFoodEmissions = pipe(getAllEmissions, filter(isFoodEmission));

const getCustomEmissions = pipe(getAllEmissions, filter(isCustomEmission));

export default {
  getAllEmissions,
  getTransportEmissions,
  getFoodEmissions,
  getCustomEmissions,
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated,
};
