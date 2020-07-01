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

const isStreamingEmission = (emission) =>
  emission.emissionType === EmissionEnum.streaming;

const isElectricityEmission = (emission) =>
  emission.emissionType === EmissionEnum.electricity;

const isCustomEmission = (emission) =>
  emission.emissionType === EmissionEnum.custom;

const isOtherEmission = (emission) =>
  emission.emissionType === EmissionEnum.custom ||
  emission.emissionType === EmissionEnum.streaming ||
  emission.emissionType === EmissionEnum.electricity;

const getTransportEmissions = pipe(
  getAllEmissions,
  filter(isTransportEmission)
);

const getFoodEmissions = pipe(getAllEmissions, filter(isFoodEmission));

const getStreamingEmissions = pipe(
  getAllEmissions,
  filter(isStreamingEmission)
);

const getElectricityEmissions = pipe(
  getAllEmissions,
  filter(isElectricityEmission)
);

const getCustomEmissions = pipe(getAllEmissions, filter(isCustomEmission));

const getOtherEmissions = pipe(getAllEmissions, filter(isOtherEmission));

export default {
  getAllEmissions,
  getTransportEmissions,
  getFoodEmissions,
  getStreamingEmissions,
  getElectricityEmissions,
  getCustomEmissions,
  getOtherEmissions,
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated,
};
