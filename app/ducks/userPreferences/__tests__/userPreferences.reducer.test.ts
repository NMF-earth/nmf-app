import { ElectricityType } from "carbon-footprint";

import { currentLanguage } from "utils";

import userPreferences from "../";

describe("userPreferences reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(userPreferences.reducer(undefined, {} as any)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityType.world,
      language: currentLanguage,
      timesStarted: 0,
    });
  });

  it("handle a monthly userPreferences change", () => {
    const acceptedTermsOfUseVersion = 2;

    const expectedAction = {
      type: userPreferences.actions.acceptTermsOfUse.toString(),
      payload: acceptedTermsOfUseVersion,
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 2,
      activatedNotifications: false,
      location: ElectricityType.world,
      language: currentLanguage,
      timesStarted: 0,
    });
  });

  it("handle location change", () => {
    const expectedAction = {
      type: userPreferences.actions.updateLocation.toString(),
      payload: ElectricityType.belgium,
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityType.belgium,
      language: currentLanguage,
      timesStarted: 0,
    });
  });

  it("handle notification change", () => {
    const expectedAction = {
      type: userPreferences.actions.toggleNotifications.toString(),
      payload: true,
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: true,
      location: ElectricityType.world,
      language: currentLanguage,
      timesStarted: 0,
    });
  });

  it("handle language change", () => {
    const expectedAction = {
      type: userPreferences.actions.changeLanguage.toString(),
      payload: "fr",
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityType.world,
      language: "fr",
      timesStarted: 0,
    });
  });

  it("handle increment of the number of times app has started", () => {
    const expectedAction = {
      type: userPreferences.actions.incrementTimesStarted.toString(),
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityType.world,
      language: currentLanguage,
      timesStarted: 1,
    });
  });
});
