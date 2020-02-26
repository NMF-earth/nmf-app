import userPreferences from "../";

let state;

const initialState = {
  acceptedTermsOfUseVersion: 3
};

describe("userPreferences selector should", () => {
  beforeEach(() => {
    state = {
      [userPreferences.namespace]: initialState
    };
  });

  test("return the monthly userPreferences", () =>
    expect(
      userPreferences.selectors.getAcceptedTermsOfUseVersion(state)
    ).toEqual(initialState.acceptedTermsOfUseVersion));
});
