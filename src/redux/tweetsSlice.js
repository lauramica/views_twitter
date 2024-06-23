import { createSlice } from "@reduxjs/toolkit";

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
      const tweet = state.find((t) => action.payload.tweetId === t._id);

      tweet.likes.some((user) => action.payload.userId === user)
        ? tweet.likes.splice(action.payload.userId)
        : tweet.likes.push(action.payload.userId);
    },
    addTweet(state, action) {
      state.unshift(action.payload);
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { fetchTweets, destroyTweet, tweetIsLiked, addTweet } = actions;
export default reducer;
