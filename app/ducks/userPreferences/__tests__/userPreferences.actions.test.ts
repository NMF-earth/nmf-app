import budget from "../";

describe("Budget actions should", () => {
  it("export expected actions", () => expect(budget.actions).toMatchSnapshot());

  it("be able to set a monthly budget", () => {
    const acceptedTermsOfUseVersion = 2;

    const expectedAction = {
      type: budget.actions.acceptTermsOfUse.toString(),
      payload: acceptedTermsOfUseVersion
    };
    expect(budget.actions.acceptTermsOfUse(acceptedTermsOfUseVersion)).toEqual(
      expectedAction
    );
  });
});
