import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../features/userReducer";
export const store = configureStore({
  reducer: {
    userAuth: reducers,
  },
});
