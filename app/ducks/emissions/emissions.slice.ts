import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Emission } from "../../interfaces";

const initialState: Emission[] = [];

const emissions = createSlice({
  name: "emissions",
  initialState,
  reducers: {
    createEmission(state, action: PayloadAction<Emission>) {
      state.push(action.payload);
    },
    deleteEmissionById(state, action: PayloadAction<string>) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
    loadEmissionsFromImport(state, action: PayloadAction<Array<Emission>>) {
      return (state = action.payload);
    },
  },
});

const {
  createEmission,
  deleteEmissionById,
  loadEmissionsFromImport,
} = emissions.actions;

export const actions = {
  createEmission,
  deleteEmissionById,
  loadEmissionsFromImport,
};

export const namespace = emissions.name;

export const reducer = emissions.reducer;
