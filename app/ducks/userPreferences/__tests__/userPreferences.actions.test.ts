import { ElectricityType } from "carbon-footprint";

import userPreferences from "../";

describe("userPreferences actions should", () => {
  it("export expected actions", () => expect(userPreferences.actions).toMatchSnapshot());

  it("be able to update to a new term of use version", () => {
    const acceptedTermsOfUseVersion = 2;

    const expectedAction = {
      type: userPreferences.actions.acceptTermsOfUse.toString(),
      payload: acceptedTermsOfUseVersion,
    };
    expect(userPreferences.actions.acceptTermsOfUse(acceptedTermsOfUseVersion)).toEqual(
      expectedAction
    );
  });

  it("be able to update to update user location", () => {
    const expectedAction = {
      type: userPreferences.actions.updateLocation.toString(),
      payload: ElectricityType.france,
    };
    expect(userPreferences.actions.updateLocation(ElectricityType.france)).toEqual(expectedAction);
  });

  it("be able to update to update notifications", () => {
    const expectedAction = {
      type: userPreferences.actions.toggleNotifications.toString(),
      payload: true,
    };
    expect(userPreferences.actions.toggleNotifications(true)).toEqual(expectedAction);
  });

  it("be able to increment the number of times app has started", () => {
    const expectedAction = {
      type: userPreferences.actions.incrementTimesStarted.toString(),
    };
    expect(userPreferences.actions.incrementTimesStarted()).toEqual(expectedAction);
  });

  it("be able to toggle units", () => {
    const expectedAction = {
      type: userPreferences.actions.toggleUnits.toString(),
      payload: false,
    };
    expect(userPreferences.actions.toggleUnits(false)).toEqual(expectedAction);
  })
});
