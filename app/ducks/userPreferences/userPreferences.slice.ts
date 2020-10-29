import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElectricityEnum } from "carbon-footprint";

const initialState = {
  acceptedTermsOfUseVersion: 0,
  activatedNotifications: false,
  location: ElectricityEnum.world,
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
    updateLocation(state, action: PayloadAction<ElectricityEnum>) {
      state.location = action.payload;
    },
  },
});

const {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
} = userPreferences.actions;

export const actions = {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
};

export const namespace = userPreferences.name;

export const reducer = userPreferences.reducer;
