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

export const { createEmission, deleteEmissionById } = emissions.actions;

export const namespace = emissions.name;

export default emissions.reducer;
