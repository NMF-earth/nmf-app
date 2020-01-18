import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Emission } from "../../interfaces";

interface Emissions {
  list: Array<Emission>;
}

const initialState: Emissions = {
  list: []
};

const emissions = createSlice({
  name: "emissions",
  initialState,
  reducers: {
    createEmission(state, action: PayloadAction<Emission>) {
      state.list.push(action.payload);
    },
    deleteEmissionById(state, action: PayloadAction<number>) {
      state.list = state.list.filter(item => item.id !== action.payload);
    }
  }
});

const { createEmission, deleteEmissionById } = emissions.actions;

export const actions = { createEmission, deleteEmissionById };

export const namespace = emissions.name;

export const reducer = emissions.reducer;
