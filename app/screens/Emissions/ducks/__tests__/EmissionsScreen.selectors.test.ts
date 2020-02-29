import { selectors } from "../";
import emissions from "../../../../ducks/emissions";
import { Emission as EmissionType, EmissionEnum } from "../../../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";

let state;

const emissionNotMitigated: EmissionType = {
  id: "1",
  creationDate: "27/03/2020",
  emissionModelType: FoodEnum.beans,
  emissionType: EmissionEnum.food,
  isMitigated: false,
  value: 10
};

const emissionMitigated: EmissionType = {
  id: "12",
  creationDate: "27/03/2020",
  emissionModelType: TransportEnum.boat,
  emissionType: EmissionEnum.transport,
  isMitigated: true,
  value: 100
};

describe("if there are emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: [emissionNotMitigated, emissionMitigated]
    };
  });

  test("`getEmissionsMitigated` should return mitigated emission(s)", () =>
    expect(JSON.stringify(selectors.getEmissionsMitigated(state))).toEqual(
      JSON.stringify([selectors.getEmissionListItem(emissionMitigated)])
    ));

  test("`getEmissionsToMitigate` should return emission(s) to mitigate", () =>
    expect(JSON.stringify(selectors.getEmissionsToMitigate(state))).toEqual(
      JSON.stringify([selectors.getEmissionListItem(emissionNotMitigated)])
    ));
});

describe("if there are no emissions", () => {
  beforeEach(() => {
    state = {
      [emissions.namespace]: []
    };
  });

  test("`getEmissionsMitigated` should return mitigated emission(s)", () =>
    expect(selectors.getEmissionsMitigated(state)).toEqual([]));

  test("`getEmissionsToMitigate` should return emission(s) to mitigate", () =>
    expect(selectors.getEmissionsToMitigate(state)).toEqual([]));
});
