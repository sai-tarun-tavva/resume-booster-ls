import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import operationsReducer from "./operations";

const reducer = {
  data: dataReducer,
  operations: operationsReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
