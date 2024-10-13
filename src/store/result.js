import { createSlice } from "@reduxjs/toolkit";
import {
  OPERATION_API_UI_KEYS,
  OPERATION_UI_KEYS,
} from "../constants/constants";

const {
  REVIEW,
  ABOUT,
  PERCENTAGE,
  IMPROVE,
  KEYWORDS,
  QUESTIONS,
  EXPERIENCE,
  SKILLS,
} = OPERATION_UI_KEYS;

const initialState = {
  selectedKey: null,
  [REVIEW]: null,
  [ABOUT]: null,
  [PERCENTAGE]: null,
  [IMPROVE]: null,
  [KEYWORDS]: null,
  [QUESTIONS]: null,
  [EXPERIENCE]: null,
  [SKILLS]: null,
};

const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    updateState(state, { payload }) {
      Object.entries(payload).forEach(([apiKey, value]) => {
        const operationKey = OPERATION_API_UI_KEYS[apiKey];
        if (operationKey) {
          state[operationKey] = value;
        }
      });
    },
    updateSelectedKey(state, { payload }) {
      state.selectedKey = payload;
    },
  },
});

export const resultActions = resultSlice.actions;
export default resultSlice.reducer;
