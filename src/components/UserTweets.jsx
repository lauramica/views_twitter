import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../Home.css";
import Tweet from "./Tweet";
import { fetchTweets } from "../redux/tweetsSlice";

function UserTweets() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        url: `http://localhost:3000/tweets`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}
          `,
        },
      });
      const userTweets = response.data.filter(
        (tweet) => tweet.user._id === user._id
      );
      dispatch(fetchTweets(userTweets));
    };
    getTweets();
  }, []);

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </>
  );
}

export default UserTweets;
