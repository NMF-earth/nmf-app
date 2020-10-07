import { ElectricityEnum } from "carbon-footprint";

import userPreferences from "../";

let state;

const initialState = {
  acceptedTermsOfUseVersion: 3,
  location: ElectricityEnum.world,
};

describe("userPreferences selector should", () => {
  beforeEach(() => {
    state = {
      [userPreferences.namespace]: initialState,
    };
  });

  test("return the monthly userPreferences", () =>
    expect(
      userPreferences.selectors.getAcceptedTermsOfUseVersion(state)
    ).toEqual(initialState.acceptedTermsOfUseVersion));

  test("return user location", () =>
    expect(userPreferences.selectors.getLocation(state)).toEqual(
      initialState.location
    ));
});
