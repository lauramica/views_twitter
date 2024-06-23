import "../Home.css";
import Tweet from "./Tweet";
import { fetchTweets } from "../redux/tweetsSlice";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function TweetsList() {
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
      dispatch(fetchTweets(response.data));
    };
    getTweets();
  }, []);

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <Tweet tweet={tweet} user={tweet.user} />
        </div>
      ))}
    </>
  );
}

export default TweetsList;
