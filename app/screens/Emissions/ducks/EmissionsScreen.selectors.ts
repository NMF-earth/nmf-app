import { map, pipe } from "ramda";
import { emissions } from "../../../ducks";
import { EmissionEnum, Emission } from "../../../interfaces";
import { transport, food } from "carbon-footprint";

interface EmissionListItem {
  id: string;
  title: string;
  creationDate: string;
  co2value: number;
  food?: boolean;
  transport?: boolean;
  custom?: boolean;
  onPress: () => void;
}

const getCO2ForEmission = (emission: Emission) => {
  if (emission.emissionModelType === "custom") return emission.value;
  const model = {
    ...transport,
    ...food
  };
  return emission.value * model[emission.emissionModelType];
};

const getEmissionListItem = (item: Emission) => {
  const emissionItem: EmissionListItem = {
    id: item.id,
    title: item.emissionType,
    creationDate: item.creationDate,
    co2value: getCO2ForEmission(item),
    food: item.emissionType === EmissionEnum.food,
    transport: item.emissionType === EmissionEnum.transport,
    custom: item.emissionType === EmissionEnum.custom,
    onPress: () => {
      // do nothing.
    }
  };

  return emissionItem;
};

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: [EmissionListItem]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getEmissionsToMitigate = state =>
  pipe(
    emissions.selectors.getEmissionsToMitigate,
    map(getEmissionListItem),
    filterByMostRecent
  )(state);

const getEmissionsMitigated = state =>
  pipe(
    emissions.selectors.getEmissionsMitigated,
    map(getEmissionListItem),
    filterByMostRecent
  )(state);

export default {
  getEmissionsToMitigate,
  getEmissionsMitigated
};
