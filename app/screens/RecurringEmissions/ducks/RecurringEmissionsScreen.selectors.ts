/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { map, pipe } from "ramda";

import { EmissionListItemProps } from "components";
import { recurringEmissions } from "ducks";
import { Emission } from "interfaces";
import { calculation, ui } from "utils";

const getEmissionListItem = (item: Emission) => {
  const emissionItem: EmissionListItemProps = {
    ...item,
    title: ui.getTranslationEmissionModelType(item.emissionModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.emissionModelType),
    onPress: () => null,
  };

  return emissionItem;
};

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: EmissionListItemProps[]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getAllRecurringEmissions = (state) =>
  pipe(
    recurringEmissions.selectors.getAllRecurringEmissions,
    map(getEmissionListItem),
    filterByMostRecent
  )(state);

export default {
  getAllRecurringEmissions,
};
