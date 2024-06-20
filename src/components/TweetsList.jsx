import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../Home.css";
import Tweet from "./Tweet";
import { fetchTweets } from "../redux/tweetsSlice";

function TweetsList() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

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
      dispatch(fetchTweets(response.data));
    };
    getTweets();
  }, []);

  const tweets = useSelector((state) => state.tweets);

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

export default TweetsList;
