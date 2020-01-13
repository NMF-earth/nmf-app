import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Emissions {
  userEmissions: Array<Emission>;
}

interface Emission {
  id: number;
  date: string;
  quantityOfCO2: number;
  mitigated: boolean;
}

const initialState: Emissions = {
  userEmissions: []
};

const emissions = createSlice({
  name: "emissions",
  initialState,
  reducers: {
    createEmission(state, action: PayloadAction<Emission>) {
      state.userEmissions.push(action.payload);
    },
    deleteEmissionById(state, action: PayloadAction<number>) {
      state.userEmissions = state.userEmissions.filter(
        item => item.id !== action.payload
      );
    }
  }
});

export const { createEmission, deleteEmissionById } = emissions.actions;

export const namespace = emissions.name;

export default emissions.reducer;
