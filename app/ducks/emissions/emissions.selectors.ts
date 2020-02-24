import { filter, propEq, find, pathOr, pipe } from "ramda";
import { namespace } from "./emissions.slice";

const getAllEmissions = pathOr([], [namespace]);

/* TODO: add tests for this selector + check if working irl */
const getEmissionById = (state, id: number) =>
  find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = state =>
  pipe(getAllEmissions, filter(propEq("isMitigated", false)))(state);

const getEmissionsMitigated = state =>
  pipe(getAllEmissions, filter(propEq("isMitigated", true)))(state);

export default {
  getAllEmissions,
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated
};
