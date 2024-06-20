import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../Home.css";
import Tweet from "./Tweet";

function UserTweets() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  const userTweets = tweets.filter((tweet) => tweet.user.id !== user.userId);

  return (
    <>
      {userTweets.map((tweet) => (
        <div key={tweet.id}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </>
  );
}

export default UserTweets;
