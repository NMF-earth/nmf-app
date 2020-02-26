import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  acceptedTermsOfUseVersion: 0
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    acceptTermsOfUse(state, action: PayloadAction<number>) {
      state.acceptedTermsOfUseVersion = action.payload;
    }
  }
});

const { acceptTermsOfUse } = userPreferences.actions;

export const actions = { acceptTermsOfUse };

export const namespace = userPreferences.name;

export const reducer = userPreferences.reducer;
