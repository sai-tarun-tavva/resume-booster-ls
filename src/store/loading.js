import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const LoadingContext = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enableLoading(state) {
      state.isLoading = true;
    },
    disableLoading(state) {
      state.isLoading = false;
    },
  },
});

export const loadingActions = LoadingContext.actions;
export default LoadingContext.reducer;
