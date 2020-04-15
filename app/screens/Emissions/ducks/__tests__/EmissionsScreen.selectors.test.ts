import { selectors } from "../";
import emissions from "../../../../ducks/emissions";
import { Emission as EmissionType, EmissionEnum } from "../../../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";
import { calculation } from "../../../../utils";
import moment from "moment";

let state;

const today = moment();
const monthsAgo = moment().subtract(2, "month");

/* TODO: remove this function copied from selectors file */
const getStartOfMonth = (time) => {
  const date = new Date(time);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.toISOString();
};

const emissionNotMitigatedOld: EmissionType = {
  id: "3",
  creationDate: monthsAgo.toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: EmissionType = {
  id: "1",
  creationDate: today.toISOString(),
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: EmissionType = {
  id: "12",
  creationDate: today.toISOString(),
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionEnum.transport,
  isMitigated: true,
  value: 100,
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [
        emissionNotMitigated,
        emissionMitigated,
        emissionNotMitigatedOld,
      ],
    };
  });

  test("`getEmissions` should return all emissions", () => {
    expect(JSON.stringify(selectors.getEmissions(state))).toEqual(
      JSON.stringify([
        {
          date: getStartOfMonth(emissionMitigated.creationDate),
          data: [
            selectors.getEmissionListItem(emissionNotMitigated),
            selectors.getEmissionListItem(emissionMitigated),
          ],
          co2value:
            calculation.getC02ValueFromEmission(emissionNotMitigated) +
            calculation.getC02ValueFromEmission(emissionMitigated),
        },
        {
          date: getStartOfMonth(emissionNotMitigatedOld.creationDate),
          data: [selectors.getEmissionListItem(emissionNotMitigatedOld)],
          co2value: calculation.getC02ValueFromEmission(
            emissionNotMitigatedOld
          ),
        },
      ])
    );
  });
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
    };
  });

  test("`getEmissions` should return empty array", () =>
    expect(selectors.getEmissions(state)).toEqual([]));
});
