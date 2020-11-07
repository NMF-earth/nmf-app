import { FoodEnum } from "carbon-footprint";

import { Emission, EmissionType } from "interfaces";

import emissions from "../";

describe("Emissions reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(emissions.reducer(undefined, {} as any)).toEqual([]);
  });

  it("handle emission creation", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodEnum.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: emissions.actions.createEmission.toString(),
      payload: emission,
    };

    expect(emissions.reducer(undefined, action)).toEqual([emission]);

    expect(emissions.reducer([emission], action)).toEqual([emission, emission]);
  });

  it("handle emission delete", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodEnum.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: emissions.actions.deleteEmissionById.toString(),
      payload: emission.id,
    };

    expect(emissions.reducer([emission], action)).toEqual([]);
  });
});
