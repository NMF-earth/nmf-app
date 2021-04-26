import { FoodType } from "carbon-footprint";

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
      emissionModelType: FoodType.nuts,
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

  it("handle toggle isMitigated property of an emission", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: emissions.actions.toggleIsMitigated.toString(),
      payload: emission.id,
    };

    expect(emissions.reducer([emission], action)).toEqual([{ ...emission, isMitigated: true }]);
  });

  it("handle emission delete", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: emissions.actions.deleteEmission.toString(),
      payload: emission.id,
    };

    expect(emissions.reducer([emission], action)).toEqual([]);
  });

  it("handle delete all emissions", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: FoodType.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: emissions.actions.deleteAllEmissions.toString(),
    };

    expect(emissions.reducer([emission], action)).toEqual([]);
  });

  it("load emissions", () => {
    const emissionsList: Array<Emission> = [
      {
        id: "1",
        creationDate: "2020-01-26T11:04:55.334Z",
        emissionType: EmissionType.food,
        emissionModelType: FoodType.beans,
        value: 20,
        isMitigated: false,
      },
      {
        id: "2",
        creationDate: "2020-02-26T11:04:55.334Z",
        emissionType: EmissionType.food,
        emissionModelType: FoodType.beef,
        value: 100,
        isMitigated: false,
      },
    ];

    const action = {
      type: emissions.actions.loadEmissionsFromImport.toString(),
      payload: emissionsList,
    };

    expect(emissions.reducer(undefined, action)).toEqual(emissionsList);
  });
});
