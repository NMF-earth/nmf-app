import { ElectricityType } from "carbon-footprint";

import { supportedLanguages } from "utils";

import userPreferences from "../";

let state;

const initialState = {
  acceptedTermsOfUseVersion: 3,
  activatedNotifications: false,
  location: ElectricityType.world,
  language: supportedLanguages.en,
  timesStarted: 4,
};

describe("userPreferences selector should", () => {
  beforeEach(() => {
    state = {
      [userPreferences.namespace]: initialState,
    };
  });

  test("return the monthly userPreferences", () =>
    expect(userPreferences.selectors.getAcceptedTermsOfUseVersion(state)).toEqual(
      initialState.acceptedTermsOfUseVersion
    ));

  test("return user location", () =>
    expect(userPreferences.selectors.getLocation(state)).toEqual(initialState.location));

  test("return notification status", () =>
    expect(userPreferences.selectors.getActivateNotifications(state)).toEqual(
      initialState.activatedNotifications
    ));

  test("return current language", () =>
    expect(userPreferences.selectors.getLanguage(state)).toEqual(initialState.language));

  test("return current timesStarted", () =>
    expect(userPreferences.selectors.getTimesStarted(state)).toEqual(initialState.timesStarted));
});
