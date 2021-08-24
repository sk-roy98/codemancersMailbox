  
import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mails: [],
    status: "idle",
    error: null,
  },
  reducers: {

  },
  extraReducers: {
  },
});

export const {} = mailSlice.actions;

export default mailSlice.reducer;