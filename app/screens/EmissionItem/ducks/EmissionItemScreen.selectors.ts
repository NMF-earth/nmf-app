import { emissions } from "../../../ducks";
import { Emission } from "../../../interfaces";

const getEmissionItemById = (state, id): Emission => {
  return emissions.selectors.getEmissionById(state, id);
};

export default {
  getEmissionItemById
};
