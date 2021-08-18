import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElectricityType } from "carbon-footprint";

import { currentLanguage } from "utils";

const initialState = {
  acceptedTermsOfUseVersion: 0,
  activatedNotifications: false,
  location: ElectricityType.world,
  language: currentLanguage,
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    acceptTermsOfUse(state, action: PayloadAction<number>) {
      state.acceptedTermsOfUseVersion = action.payload;
    },
    toggleNotifications(state, action: PayloadAction<boolean>) {
      state.activatedNotifications = action.payload;
    },
    updateLocation(state, action: PayloadAction<ElectricityType>) {
      state.location = action.payload;
    },
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

const {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  changeLanguage,
} = userPreferences.actions;

export const actions = {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  changeLanguage,
};

export const namespace = userPreferences.name;

export const reducer = userPreferences.reducer;
