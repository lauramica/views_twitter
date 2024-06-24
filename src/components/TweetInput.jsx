import "../Home.css";
import { addTweet } from "../redux/tweetsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TweetInput() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [tweet, setTweet] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (tweet !== "") {
      const storeTweet = async () => {
        const response = await axios({
          url: `http://localhost:3000/tweets`,
          method: "POST",
          data: { tweet },
          headers: {
            Authorization: `Bearer ${user.token}
            `,
          },
        });
        dispatch(addTweet({ ...response.data.newTweet, user, content: tweet }));
      };
      storeTweet();
      setTweet("");
    }
  };

  return (
    user && (
      <>
        <div className="post-container d-flex flex-column pb-3">
          <div className="d-flex">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.avatar.includes("http")
                    ? user.avatar
                    : `http://localhost:3000/img/${user.avatar}`
                }
                alt="avatar"
                className="profile-picture m-2"
              />
            </Link>

            <div className="d-flex w-100">
              <form className="tweet-form" method="POST" onSubmit={handlePost}>
                <label htmlFor="tweet-content"></label>
                <textarea
                  rows="3"
                  charswidth="150"
                  type="text"
                  className="form-control tweet-input me-2 mb-1"
                  id="tweet-content"
                  name="tweet-content"
                  placeholder="Whats happening?"
                  value={tweet}
                  aria-describedby="firstname"
                  onChange={(e) => setTweet(e.target.value)}
                />

                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill m-2"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default TweetInput;
