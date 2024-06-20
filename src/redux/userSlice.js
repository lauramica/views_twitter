import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {},

  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    logoutUser(state, action) {
      return {};
    },
  },
});

const { actions, reducer } = userSlice;
export const { loginUser, logoutUser, showUsers } = actions;
export default reducer;
