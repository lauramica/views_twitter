import { createSlice } from "@reduxjs/toolkit";
import usersDB from "./getUsersFromDB";

const usersSlice = createSlice({
  name: "users",
  initialState: [usersDB],
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
    showUsers(state, action) {
      console.log(state);
    },
  },
});

const { actions, reducer } = usersSlice;
export const { createUser, loginUser, logoutUser, showUsers } = actions;
export default reducer;
