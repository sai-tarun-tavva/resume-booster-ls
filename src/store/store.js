import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import loadingReducer from "./loading";
import resultReducer from "./result";

const reducer = {
  data: dataReducer,
  result: resultReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
