import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMails = createAsyncThunk("mails/fetchMails", async () => {
  const res = await axios.get(
    "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98"
  );
  return { mails: res.data };
});

export const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mails: [],
    filterMails: [],
    searchedMails: []
  },
  reducers: {
    filterMails: (state, action) => {
      state.filterMails = state.mails.filter(
        (item) => item.tag === action.payload || action.payload === "all"
      );
    },
    searchMails: (state, action) => {
      state.searchedMails = state.mails.filter((item) =>
        // JSON.stringify(item).includes(action.payload)
        {
          for(let key in item){
            if (JSON.stringify(item[key]).includes(action.payload)){
              return true
            }
          }
          return false
        }
      );
    },
  },
  extraReducers: {
    [fetchMails.fulfilled]: (state, action) => {
      state.mails = action.payload.mails;
      state.filterMails = action.payload.mails.filter(
        (mail) => mail.tag === "inbox"
      );
    },
  },
});

export const { filterMails, searchMails } = mailSlice.actions;

export default mailSlice.reducer;
