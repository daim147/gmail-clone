import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    mail: false,
  },
  reducers: {
    isOpen(state) {
      state.mail = true;
    },
    isClose(state) {
      state.mail = false;
    },
  },
});

const mailReducers = mailSlice.reducer;
const { isOpen, isClose } = mailSlice.actions;

export { mailReducers, isOpen, isClose };
