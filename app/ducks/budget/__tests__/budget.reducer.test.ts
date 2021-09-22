import budget from "../";

describe("Budget reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(budget.reducer(undefined, {} as any)).toEqual({
      monthlyCarbonBudget: 167,
    });
  });

  it("handle a monthly budget change", () => {
    const monthlyCarbonBudget = 200;

    const expectedAction = {
      type: budget.actions.setMonthlyCarbonBudget.toString(),
      payload: monthlyCarbonBudget,
    };

    expect(budget.reducer(undefined, expectedAction)).toEqual({
      monthlyCarbonBudget: 200,
    });
  });
});
