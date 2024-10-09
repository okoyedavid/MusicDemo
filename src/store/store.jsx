import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Slices";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
