import { transport, food } from "carbon-footprint";
import { EmissionEnum, Emission } from "../../interfaces";

const getC02ValueFromEmission = (emission: Emission) => {
  if (emission.emissionModelType === EmissionEnum.custom) return emission.value;
  const model = {
    ...transport,
    ...food
  };
  return emission.value * model[emission.emissionModelType];
};

export default {
  getC02ValueFromEmission
};
