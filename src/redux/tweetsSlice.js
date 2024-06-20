import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    fetchTweets(state, action) {
      return action.payload;
    },
    destroyTweet(state, action) {
      return state.filter((tweet) => tweet._id !== action.payload);
    },
    tweetIsLiked(state, action) {
      return state;
    },
    addTweet(state, action) {
      state.unshift(action.payload);
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { fetchTweets, destroyTweet, tweetIsLiked, addTweet } = actions;
export default reducer;
