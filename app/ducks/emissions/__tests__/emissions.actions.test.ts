import emissions from "../";
import { Emission, EmissionEnum } from "../../../interfaces";
import { version } from "carbon-footprint";

describe("Emissions actions should", () => {
  it("export expected actions", () =>
    expect(emissions.actions).toMatchSnapshot());

  it("be able to create an emission", () => {
    const emission: Emission = {
      id: Date.now(),
      creationDate: "now",
      co2eqKilograms: 10,
      co2eqModelVersion: version.co2eqModel,
      emissionType: EmissionEnum.custom,
      isMitigated: false
    };

    const expectedAction = {
      type: emissions.actions.createEmission.toString(),
      payload: emission
    };
    expect(emissions.actions.createEmission(emission)).toEqual(expectedAction);
  });
});
