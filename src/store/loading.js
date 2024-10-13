import { createSlice } from "@reduxjs/toolkit";

// Initial state for the loading slice
const initialState = {
  isLoading: false, // Indicates whether data is currently loading
};

// Creating the loading slice
const LoadingContext = createSlice({
  name: "loading",
  initialState,
  reducers: {
    // Enables the loading state
    enableLoading(state) {
      state.isLoading = true;
    },
    // Disables the loading state
    disableLoading(state) {
      state.isLoading = false;
    },
  },
});

// Exporting actions and reducer for the loading slice
export const loadingActions = LoadingContext.actions;
export default LoadingContext.reducer;
