/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { filter, map, pipe } from "ramda";
import moment from "moment";

import { EmissionListItemProps } from "components";
import { emissions } from "ducks";
import { Emission } from "interfaces";
import { calculation, ui } from "utils";

const getEmissionListItem = (item: Emission) => {
  const emissionItem: EmissionListItemProps = {
    ...item,
    title: ui.getTranslationEmissionModelType(item.emissionModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.emissionModelType),
    onPress: () => {
      // do nothing.
    },
  };

  return emissionItem;
};

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: EmissionListItemProps[]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const filterByMonth = (emissions: EmissionListItemProps[], date: string) =>
  filter((emission) => moment(emission.creationDate).isSame(date, "month"), emissions);

const getAllEmissions = (state) =>
  pipe(emissions.selectors.getAllEmissions, map(getEmissionListItem))(state);

const getMonthlyEmission = (state, date) => filterByMonth(getAllEmissions(state), date);

const getEmissions = (state, date) => filterByMostRecent(getMonthlyEmission(state, date));

export default {
  getEmissions,
};
