import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Emission } from "interfaces";

const initialState: Emission[] = [];

const emissions = createSlice({
  name: "emissions",
  initialState,
  reducers: {
    createEmission(state, action: PayloadAction<Emission>) {
      state.push(action.payload);
    },
    deleteEmission(state, action: PayloadAction<string>) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
    toggleIsMitigated(state, action: PayloadAction<string>) {
      return (state = state.map((item) =>
        item.id === action.payload ? { ...item, isMitigated: !item.isMitigated } : item
      ));
    },
    deleteAllEmissions() {
      return initialState;
    },
    loadEmissionsFromImport(state, action: PayloadAction<Array<Emission>>) {
      return (state = action.payload);
    },
  },
});

const {
  createEmission,
  deleteEmission,
  toggleIsMitigated,
  deleteAllEmissions,
  loadEmissionsFromImport,
} = emissions.actions;

export const actions = {
  createEmission,
  deleteEmission,
  toggleIsMitigated,
  deleteAllEmissions,
  loadEmissionsFromImport,
};

export const namespace = emissions.name;

export const reducer = emissions.reducer;
