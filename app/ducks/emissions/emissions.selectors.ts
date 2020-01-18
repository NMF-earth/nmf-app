import { filter, propEq, find, pathOr, pipe } from "ramda";
import { namespace } from "./emissions.slice";

const getEmissions = pathOr([], [namespace, "list"]);

const getEmissionById = (state, id) => find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = state =>
  pipe(getEmissions, filter(propEq("isMitigated", false)))(state);

const getEmissionsMitigated = state =>
  pipe(getEmissions, filter(propEq("isMitigated", true)))(state);

export default {
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated
};
