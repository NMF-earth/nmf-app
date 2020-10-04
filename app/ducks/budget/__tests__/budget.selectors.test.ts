import budget from "../";

let state;

const initialState = {
  monthlyCarbonBudget: 500,
};

describe("Budget selector should", () => {
  beforeEach(() => {
    state = {
      [budget.namespace]: initialState,
    };
  });

  test("return the monthly budget", () =>
    expect(budget.selectors.getMonthlyCarbonBudget(state)).toEqual(
      initialState.monthlyCarbonBudget
    ));
});
