import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, actions) {
      state.user = actions.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

const userReducers = userSlice.reducer;
const { login, logout } = userSlice.actions;

export { userReducers, login, logout };
