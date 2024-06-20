import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { destroyTweet } from "../redux/tweetsSlice";

function Tweet({ tweet }) {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();
  const user = useSelector((state) => state.user);

  const { _id } = tweet;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const deleteTweet = async () => {
      await axios({
        url: `http://localhost:3000/tweets/${_id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}
          `,
        },
      });
      dispatch(destroyTweet(_id));
    };
    deleteTweet();
  };

  return (
    <div className="tweets-container">
      <div className="tweet-box d-flex align-items-start">
        <div className="img-box m-2">
          <img
            src={tweet.user.photo}
            alt="gatito"
            className="profile-picture"
          />
        </div>
        <div className="d-flex flex-column justify-content-center mt-2">
          <div className="d-flex">
            <p className="bold me-2">
              {tweet.user.firstname} {tweet.user.lastname}
            </p>
            <p className="grey">
              @{tweet.user.username} · <small>{formattedDate}</small>
            </p>
          </div>
          <p>{tweet.content}</p>
          <p className="m-0">
            <i className="bi bi-heart"></i>
            {/*  <i className="bi bi-heart-fill"></i> */}
          </p>

          {tweet.user._id === user._id ? (
            <button onClick={handleOnClick}>delete</button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
