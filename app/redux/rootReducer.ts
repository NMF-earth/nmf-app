import { combineReducers } from "@reduxjs/toolkit";
import emissions from "../ducks/emissions";
import budget from "../ducks/budget";
import userPreferences from "../ducks/userPreferences";

const rootReducer = combineReducers({
  emissions: emissions.reducer,
  budget: budget.reducer,
  userPreferences: userPreferences.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
