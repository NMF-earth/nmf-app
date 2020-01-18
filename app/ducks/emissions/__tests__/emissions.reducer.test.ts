import emissions from "../";
import { Emission, EmissionEnum } from "../../../interfaces";
import { version } from "carbon-footprint";

describe("Reducer should", () => {
  it("should return the initial state", () => {
    expect(emissions.reducer(undefined, {} as any)).toEqual({
      list: []
    });
  });

  it("should handle emission creation", () => {
    const emission: Emission = {
      id: Date.now(),
      creationDate: "now",
      co2eqKilograms: 10,
      co2eqModelVersion: version.co2eqModel,
      emissionType: EmissionEnum.custom,
      isMitigated: false
    };
    const action = {
      type: emissions.actions.createEmission.toString(),
      payload: emission
    };

    expect(emissions.reducer(undefined, action)).toEqual({
      list: [emission]
    });

    expect(emissions.reducer({ list: [emission] }, action)).toEqual({
      list: [emission, emission]
    });
  });
});
