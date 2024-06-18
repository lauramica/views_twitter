import { createSlice } from "@reduxjs/toolkit";

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
export const { createUser, loginUser, logoutUser } = actions;
export default reducer;
