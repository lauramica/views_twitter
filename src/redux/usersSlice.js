import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },

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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

/* export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await usersDB();
    dispatch(usersSlice.actions.setUsers(users));
  } catch (err) {
    console.log("Error fetching users:", err);
  }
}; */

const { actions, reducer } = usersSlice;
export const { createUser, loginUser, logoutUser, showUsers } = actions;
export default reducer;
