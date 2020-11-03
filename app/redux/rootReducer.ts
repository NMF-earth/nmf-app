import { combineReducers } from "@reduxjs/toolkit";

import { emissions, budget, userPreferences } from "ducks";

const rootReducer = combineReducers({
  emissions: emissions.reducer,
  budget: budget.reducer,
  userPreferences: userPreferences.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
