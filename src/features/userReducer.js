import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login() {},
    logout() {},
  },
});

const userReducers = userSlice.reducer;
const { login, logout } = userSlice.actions;

export { userReducers, login, logout };
