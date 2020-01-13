import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer
});

// TODO: check if needed
// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("./rootReducer", () => {
//     const newRootReducer = require("./rootReducer").default;
//     store.replaceReducer(newRootReducer);
//   });
//  }

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
