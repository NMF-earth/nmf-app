import { TransportEnum } from "carbon-footprint";

import { Emission, EmissionType } from "interfaces";

import emissions from "../";

describe("Emissions actions should", () => {
  it("export expected actions", () =>
    expect(emissions.actions).toMatchSnapshot());

  it("be able to create an emission", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: TransportEnum.boat,
      value: 200,
      isMitigated: false,
    };

    const expectedAction = {
      type: emissions.actions.createEmission.toString(),
      payload: emission,
    };

    expect(emissions.actions.createEmission(emission)).toEqual(expectedAction);
  });

  it("be able to delete an emission", () => {
    const expectedAction = {
      type: emissions.actions.deleteEmissionById.toString(),
      payload: "123",
    };

    expect(emissions.actions.deleteEmissionById("123")).toEqual(expectedAction);
  });
});
