import budget from "../";

describe("Budget actions should", () => {
  it("export expected actions", () => expect(budget.actions).toMatchSnapshot());

  it("be able to set a monthly budget", () => {
    const monthlyCarbonBudget = 200;

    const expectedAction = {
      type: budget.actions.setMonthlyCarbonBudget.toString(),
      payload: monthlyCarbonBudget,
    };
    expect(budget.actions.setMonthlyCarbonBudget(monthlyCarbonBudget)).toEqual(expectedAction);
  });
});
