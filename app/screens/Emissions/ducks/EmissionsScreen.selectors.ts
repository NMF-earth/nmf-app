import { map, pipe, groupBy, toPairs } from "ramda";
import { emissions } from "../../../ducks";
import { EmissionEnum, Emission } from "../../../interfaces";
import { calculation, ui } from "../../../utils";
import moment from "moment";

interface EmissionListItem {
  id: string;
  name: string;
  title: string;
  creationDate: string;
  co2value: number;
  food?: boolean;
  transport?: boolean;
  custom?: boolean;
  onPress: () => void;
}

const getEmissionListItem = (item: Emission) => {
  const emissionItem: EmissionListItem = {
    id: item.id,
    name: item.name,
    title: ui.getTranslationModelType(item.emissionModelType),
    creationDate: item.creationDate,
    co2value: calculation.getC02ValueFromEmission(item),
    food: item.emissionType === EmissionEnum.food,
    transport: item.emissionType === EmissionEnum.transport,
    custom: item.emissionType === EmissionEnum.custom,
    onPress: () => {
      // do nothing.
    },
  };

  return emissionItem;
};

const getStartOfMonth = (time) => {
  const date = new Date(time);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.toISOString();
};

const groupByMonth = groupBy((item: EmissionListItem) =>
  getStartOfMonth(item.creationDate)
);

const dateObjMap = map(([date, data]) => ({
  date: moment(date).format("MMMM YYYY"),
  data: data,
}));

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: [EmissionListItem]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getEmissionsToMitigate = (state) =>
  pipe(
    emissions.selectors.getEmissionsToMitigate,
    map(getEmissionListItem),
    filterByMostRecent,
    groupByMonth,
    toPairs,
    dateObjMap
  )(state);

const getEmissionsMitigated = (state) =>
  pipe(
    emissions.selectors.getEmissionsMitigated,
    map(getEmissionListItem),
    filterByMostRecent,
    groupByMonth,
    toPairs,
    dateObjMap
  )(state);

export default {
  getEmissionsToMitigate,
  getEmissionsMitigated,
  getEmissionListItem,
};
