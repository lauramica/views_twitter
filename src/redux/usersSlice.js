import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
  name: "users",
  initialState: [],

  reducers: {
    createUser(state, action) {
      return state;
    },
    loginUser(state, action) {
      return state;
    },
    logoutUser(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = usersSlice;
export const { createUser, loginUser, logoutUser, showUsers } = actions;
export default reducer;
