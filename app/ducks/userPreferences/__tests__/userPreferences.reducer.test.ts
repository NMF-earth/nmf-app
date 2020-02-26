import userPreferences from "../";

describe("userPreferences reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(userPreferences.reducer(undefined, {} as any)).toEqual({
      acceptedTermsOfUseVersion: 0
    });
  });

  it("handle a monthly userPreferences change", () => {
    const acceptedTermsOfUseVersion = 2;

    const expectedAction = {
      type: userPreferences.actions.acceptTermsOfUse.toString(),
      payload: acceptedTermsOfUseVersion
    };

    expect(userPreferences.reducer(undefined, expectedAction)).toEqual({
      acceptedTermsOfUseVersion: 2
    });
  });
});
