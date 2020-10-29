import { ElectricityEnum } from "carbon-footprint";

import userPreferences from "../";

describe("userPreferences reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(userPreferences.reducer(undefined, {} as any)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityEnum.world,
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
      location: ElectricityEnum.world,
    });
  });

  it("handle location change", () => {
    const expectedAction = {
      type: userPreferences.actions.updateLocation.toString(),
      payload: ElectricityEnum.belgium,
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 0,
      activatedNotifications: false,
      location: ElectricityEnum.belgium,
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
      location: ElectricityEnum.world,
    });
  });
});
