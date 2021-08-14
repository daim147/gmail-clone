import { configureStore } from "@reduxjs/toolkit";
import { mailReducers } from "../features/mailReducer";
import { userReducers } from "../features/userReducer";
export const store = configureStore({
  reducer: {
    userAuth: userReducers,
    mailOpen: mailReducers,
  },
});
