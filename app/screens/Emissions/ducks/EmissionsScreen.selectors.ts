/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { map, pipe, groupBy, toPairs } from "ramda";
import moment from "moment";

import { emissions, recurringEmissions } from "ducks";
import { Emission } from "interfaces";
import { calculation, ui } from "utils";

interface EmissionListItem extends Emission {
  title: string;
  co2value: number;
  iconName: string;
  onPress: () => void;
}

const getEmissionListItem = (item: Emission) => {
  const emissionItem: EmissionListItem = {
    ...item,
    title: ui.getTranslationEmissionModelType(item.emissionModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.emissionModelType),
    onPress: () => null,
  };

  return emissionItem;
};

const getStartOfMonth = (time) => moment(time).startOf("month").format();

const groupByMonth = groupBy((item: EmissionListItem) => getStartOfMonth(item.creationDate));

const getLatest = (data = []) => data.slice(0, 3);

const dateObjMap = map(([date, data]) => ({
  date: date,
  data: getLatest(data),
}));

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: [EmissionListItem]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getEmissions = (state) =>
  pipe(
    emissions.selectors.getAllEmissions,
    map(getEmissionListItem),
    filterByMostRecent,
    groupByMonth,
    toPairs,
    dateObjMap
  )(state);

const getRecurringEmisions = (state) =>
  pipe(
    recurringEmissions.selectors.getAllRecurringEmissions,
    map(getEmissionListItem),
    filterByMostRecent,
    getLatest
  )(state);

export default {
  getEmissions,
  getEmissionListItem,
  getRecurringEmisions,
};
