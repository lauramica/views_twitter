import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import tweetsReducer from "./tweetsSlice";

const store = configureStore({
  reducer: { users: usersReducer, tweets: tweetsReducer },
});

export default store;
