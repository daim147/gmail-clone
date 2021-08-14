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

const reducers = userSlice.reducer;
const { login, logout } = userSlice.actions;

export { reducers, login, logout };
