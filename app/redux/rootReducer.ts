import { combineReducers } from "@reduxjs/toolkit";
import emissions from "../ducks/emissions";

const rootReducer = combineReducers({
  emissions: emissions.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
