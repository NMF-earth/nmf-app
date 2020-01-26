import { map, pipe } from "ramda";
import { emissions } from "../../../ducks";
import { EmissionEnum, Emission } from "../../../interfaces";
import { transport, food } from "carbon-footprint";

const getCO2ForEmission = (emission: Emission) => {
  if (emission.emissionModelType === "custom") return emission.value;
  const model = {
    ...transport,
    ...food
  };
  return emission.value * model[emission.emissionModelType];
};

const getEmissionListItem = (item: Emission) => ({
  id: item.id,
  title: item.emissionType,
  co2value: getCO2ForEmission(item),
  food: item.emissionType === EmissionEnum.food,
  transport: item.emissionType === EmissionEnum.transport,
  custom: item.emissionType === EmissionEnum.custom,
  onPress: () => {
    // do nothing.
  }
});

const getEmissionsToMitigate = state =>
  pipe(
    emissions.selectors.getEmissionsToMitigate,
    map(getEmissionListItem)
  )(state);

const getEmissionsMitigated = state =>
  pipe(
    emissions.selectors.getEmissionsMitigated,
    map(getEmissionListItem)
  )(state);

export default {
  getEmissionsToMitigate,
  getEmissionsMitigated
};
