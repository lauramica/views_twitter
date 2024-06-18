import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    fetchTweets(state, action) {
      return action.payload;
    },
    deleteTweet(state, action) {
      return state;
    },
    tweetIsLiked(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { fetchTweets, deleteTweet, tweetIsLiked } = actions;
export default reducer;
