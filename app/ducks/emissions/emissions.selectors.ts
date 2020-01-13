import { filter, propEq, find } from "ramda";
import { namespace } from "./emissions.slice";

const getEmissionById = (state, id) => find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = state =>
  filter(propEq("mitigated", false))(state);

const getEmissionsMitigated = state => filter(propEq("mitigated", true))(state);

export default {
  getEmissionById,
  getEmissionsToMitigate,
  getEmissionsMitigated
};
