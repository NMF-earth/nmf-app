import { map, pipe, groupBy, toPairs, sum } from "ramda";
import moment from "moment";

import { emissions } from "ducks";
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
    title: ui.getTranslationModelType(item.emissionModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.emissionModelType),
    onPress: () => {
      // do nothing.
    },
  };

  return emissionItem;
};

const getStartOfMonth = (time) => moment(time).startOf("month").format();

const groupByMonth = groupBy((item: EmissionListItem) =>
  getStartOfMonth(item.creationDate)
);

const dateObjMap = map(([date, data, co2value]) => ({
  date: date,
  data: data,
  co2value: co2value,
}));

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: [EmissionListItem]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getMonthlyPourcentage = (items) =>
  map(
    (item) => [...item, sum(map((emission) => emission.co2value, item[1]))],
    items
  );

const getEmissions = (state) =>
  pipe(
    emissions.selectors.getAllEmissions,
    map(getEmissionListItem),
    filterByMostRecent,
    groupByMonth,
    toPairs,
    getMonthlyPourcentage,
    dateObjMap
  )(state);

export default {
  getEmissions,
  getEmissionListItem,
};
