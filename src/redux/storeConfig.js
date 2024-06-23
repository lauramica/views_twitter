import userReducer from "./userSlice";
import tweetsReducer from "./tweetsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { user: userReducer, tweets: tweetsReducer },
});

export default store;
