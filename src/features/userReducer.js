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

const reducers = userSlice.reducers;
const { login, logout } = userSlice.actions;

export { reducers, login, logout };
