import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  monthlyCarbonBudget: 167,
};

const budget = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setMonthlyCarbonBudget(state, action: PayloadAction<number>) {
      state.monthlyCarbonBudget = action.payload;
    },
  },
});

const { setMonthlyCarbonBudget } = budget.actions;

export const actions = { setMonthlyCarbonBudget };

export const namespace = budget.name;

export const reducer = budget.reducer;
