import { combineReducers } from "@reduxjs/toolkit";

import { emissions, budget, userPreferences, recurringEmissions } from "ducks";

const rootReducer = combineReducers({
  emissions: emissions.reducer,
  budget: budget.reducer,
  userPreferences: userPreferences.reducer,
  recurringEmissions: recurringEmissions.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
