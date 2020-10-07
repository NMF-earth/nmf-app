import { ElectricityEnum } from "carbon-footprint";

import userPreferences from "../";

describe("userPreferences actions should", () => {
  it("export expected actions", () =>
    expect(userPreferences.actions).toMatchSnapshot());

  it("be able to update to a new term of use version", () => {
    const acceptedTermsOfUseVersion = 2;

    const expectedAction = {
      type: userPreferences.actions.acceptTermsOfUse.toString(),
      payload: acceptedTermsOfUseVersion,
    };
    expect(
      userPreferences.actions.acceptTermsOfUse(acceptedTermsOfUseVersion)
    ).toEqual(expectedAction);
  });

  it("be able to update to update user location", () => {
    const expectedAction = {
      type: userPreferences.actions.updateLocation.toString(),
      payload: ElectricityEnum.france,
    };
    expect(
      userPreferences.actions.updateLocation(ElectricityEnum.france)
    ).toEqual(expectedAction);
  });
});
