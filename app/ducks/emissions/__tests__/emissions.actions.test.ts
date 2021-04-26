import { TransportType } from "carbon-footprint";

import { Emission, EmissionType } from "interfaces";

import emissions from "../";

describe("Emissions actions should", () => {
  it("export expected actions", () => expect(emissions.actions).toMatchSnapshot());

  it("be able to create an emission", () => {
    const emission: Emission = {
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      emissionType: EmissionType.custom,
      emissionModelType: TransportType.boat,
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
      type: emissions.actions.deleteEmission.toString(),
      payload: "123",
    };

    expect(emissions.actions.deleteEmission("123")).toEqual(expectedAction);
  });

  it("be able to toggle isMitigated property of an emission", () => {
    const expectedAction = {
      type: emissions.actions.toggleIsMitigated.toString(),
      payload: "123",
    };

    expect(emissions.actions.toggleIsMitigated("123")).toEqual(expectedAction);
  });

  it("be able to load emissions", () => {
    const emissionsList: Array<Emission> = [
      {
        id: "1",
        creationDate: "2020-01-26T11:04:55.334Z",
        emissionType: EmissionType.transport,
        emissionModelType: TransportType.boat,
        value: 200,
        isMitigated: false,
      },
      {
        id: "2",
        creationDate: "2020-02-26T11:04:55.334Z",
        emissionType: EmissionType.transport,
        emissionModelType: TransportType.bus,
        value: 100,
        isMitigated: false,
      },
    ];

    const expectedAction = {
      type: emissions.actions.loadEmissionsFromImport.toString(),
      payload: emissionsList,
    };

    expect(emissions.actions.loadEmissionsFromImport(emissionsList)).toEqual(expectedAction);
  });

  it("be able to delete all emissions", () => {
    const expectedAction = {
      type: emissions.actions.deleteAllEmissions.toString(),
      payload: undefined,
    };

    expect(emissions.actions.deleteAllEmissions()).toEqual(expectedAction);
  });
});
