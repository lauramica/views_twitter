import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Home.css";

function TweetsList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjcwMmQzMjU1NDZjMTUwNDhkYWQ5ZTUiLCJpYXQiOjE3MTg2MzcwMTZ9.haoPG88Nrm6pdSrSYPBvQCCZfNQgSxaIcrBHQ3dRzBM";

        const response = await axios.get("http://localhost:3000/tweets", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTweets(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError("Unauthorized: Please check your credentials");
        } else {
          setError(error.message);
        }
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweetBox">
          <div className="tweetImageContainer">
            <h3>IMG</h3>
          </div>
          <div className="tweetTextContainer">
            <p>
              <b> Nombre Apellido </b>{" "}
              <small className="username">
                @nombredeusuario · horadeltweet
              </small>
            </p>
            <p>{tweet.content}</p>
            <p>{tweets.likes}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TweetsList;
