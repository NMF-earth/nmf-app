import { emissions } from "../../../ducks";
import { Emission } from "../../../interfaces";

const getEmissionItemById = (state): Emission => {
  return emissions.selectors.getEmissionById(state, state.params.id)
}

export default {
  getEmissionItemById
};
