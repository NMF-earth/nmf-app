import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Emission } from "../../interfaces";
import uuid from "uuid";

const initialState: Emission[] = []

const emissions = createSlice({
  name: "emissions",
  initialState,
  reducers: {
    createEmission(state, action: PayloadAction<Emission>) {
      const emission = action.payload;
      emission.creationDate = Date.now();
      emission.id = uuid();
      emission.isMitigated = false;
      state.push(emission);
    },
    /* TODO: add test for deleteEmissionById and test if it's working irl */
    deleteEmissionById(state, action: PayloadAction<string>) {
      state = state.filter(item => item.id !== action.payload);
    }
  }
});

const { createEmission, deleteEmissionById } = emissions.actions;

export const actions = { createEmission, deleteEmissionById };

export const namespace = emissions.name;

export const reducer = emissions.reducer;
