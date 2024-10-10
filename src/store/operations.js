import { createSlice } from "@reduxjs/toolkit";
import { OPERATION_KEYS } from "../constants";

const initialState = {
  [OPERATION_KEYS.REVIEW]: false,
  [OPERATION_KEYS.ABOUT]: false,
  [OPERATION_KEYS.PERCENTAGE]: false,
  [OPERATION_KEYS.IMPROVE]: false,
  [OPERATION_KEYS.KEYWORDS]: false,
  [OPERATION_KEYS.QUESTIONS]: false,
  [OPERATION_KEYS.EXP]: false,
  [OPERATION_KEYS.SKILLS]: false,
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    updateOperation(state, { payload }) {
      const { type, isChecked } = payload;

      state[type] = isChecked;
    },
  },
});

export const operationActions = operationsSlice.actions;
export default operationsSlice.reducer;
