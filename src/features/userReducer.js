import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "pending",
  },
  reducers: {
    login(state, actions) {
      state.user = actions.payload;
    },
    logout(state) {
      state.user = null;
    },
    pending(state) {
      state.user = "pending";
    },
  },
});

const userReducers = userSlice.reducer;
const { login, logout, pending } = userSlice.actions;

export { userReducers, login, logout, pending };
