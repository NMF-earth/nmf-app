import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Emission, EmissionEnum } from "../../interfaces";
import { FoodEnum, TransportEnum } from "carbon-footprint";

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
      let emission = action.payload;

      switch (emission.emissionType) {
        case EmissionEnum.food:
          emission = {
            ...emission,
            emissionType: EmissionEnum.food,
            food: {
              foodType: FoodEnum.redMeat,
              quantityKilograms: 0.3
            }
          };
          break;
        case EmissionEnum.transport:
          emission = {
            ...emission,
            emissionType: EmissionEnum.transport,
            transport: {
              transportType: TransportEnum.plane,
              durationHours: 1.8
            }
          };
          break;
        case EmissionEnum.custom:
          emission = {
            ...emission,
            emissionType: EmissionEnum.custom
          };
          break;

        default:
          // TODO: sentry error
          return;
      }

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
