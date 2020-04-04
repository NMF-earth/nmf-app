import { selectors } from "../";
import emissions from "../../../../ducks/emissions";
import { Emission as EmissionType, EmissionEnum } from "../../../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";

let state;

const emissionNotMitigatedOld: EmissionType = {
  id: "3",
  creationDate: "2020-03-01T17:06:40.185Z",
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 30,
};

const emissionNotMitigated: EmissionType = {
  id: "1",
  creationDate: "2020-04-01T17:06:40.185Z",
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10,
};

const emissionMitigated: EmissionType = {
  id: "12",
  creationDate: "2020-03-01T10:35:15.411Z",
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

  test("`getEmissionsMitigated` should return mitigated emission(s)", () => {
    expect(JSON.stringify(selectors.getEmissionsMitigated(state))).toEqual(
      JSON.stringify([
        {
          date: "March 2020",
          data: [selectors.getEmissionListItem(emissionMitigated)],
        },
      ])
    );
  });

  test("`getEmissionsToMitigate` should return emission(s) to mitigate", () =>
    expect(JSON.stringify(selectors.getEmissionsToMitigate(state))).toEqual(
      JSON.stringify([
        {
          date: "April 2020",
          data: [selectors.getEmissionListItem(emissionNotMitigated)],
        },
        {
          date: "March 2020",
          data: [selectors.getEmissionListItem(emissionNotMitigatedOld)],
        },
      ])
    ));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [],
    };
  });

  test("`getEmissionsMitigated` should return mitigated emission(s)", () =>
    expect(selectors.getEmissionsMitigated(state)).toEqual([]));

  test("`getEmissionsToMitigate` should return emission(s) to mitigate", () =>
    expect(selectors.getEmissionsToMitigate(state)).toEqual([]));
});
