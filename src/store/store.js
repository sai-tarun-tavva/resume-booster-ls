import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";

const reducer = {
  data: dataReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
