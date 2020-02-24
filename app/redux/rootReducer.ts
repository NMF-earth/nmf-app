import { combineReducers } from "@reduxjs/toolkit";
import emissions from "../ducks/emissions";
import budget from "../ducks/budget";

const rootReducer = combineReducers({
  emissions: emissions.reducer,
  budget: budget.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
