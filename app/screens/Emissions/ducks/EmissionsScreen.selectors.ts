import { toString, map, pipe } from "ramda";
import { emissions } from "../../../ducks";
import { EmissionTypeEnum } from "../../../interfaces";

const getEmissionListItem = item => ({
  id: item.id,
  title: item.emissionType,
  subTitle: toString(item.co2eqKilograms),
  food: item.emissionType === EmissionTypeEnum.food,
  transport: item.emissionType === EmissionTypeEnum.transport,
  custom: item.emissionType === EmissionTypeEnum.custom,
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
