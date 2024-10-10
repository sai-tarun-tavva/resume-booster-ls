import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  file: null,
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
    updateFile(state, { payload }) {
      state.file = payload;
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
