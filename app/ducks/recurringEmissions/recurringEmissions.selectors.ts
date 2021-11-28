/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { propEq, find, pathOr } from "ramda";

import { namespace } from "./recurringEmissions.slice";

const getAllRecurringEmissions = pathOr([], [namespace]);

const getRecurringEmissionById = (state, id: string) => find(propEq("id", id))(state[namespace]);

export default {
  getAllRecurringEmissions,
  getRecurringEmissionById,
};
