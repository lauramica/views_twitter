import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    createTweet(state, action) {
      return state;
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
export const { createTweet, deleteTweet, tweetIsLiked } = actions;
export default reducer;
