import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  selectedAI: "",
  selectedActions: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateDescription(state, { payload }) {
      state.description = payload;
    },
    updateSelectedAI(state, { payload }) {
      state.selectedAI = payload;
    },
    updateSelectedActions(state, { payload }) {
      state.selectedActions = payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
