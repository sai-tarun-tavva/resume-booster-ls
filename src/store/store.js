import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import resultReducer from "./result";

const reducer = {
  data: dataReducer,
  result: resultReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
