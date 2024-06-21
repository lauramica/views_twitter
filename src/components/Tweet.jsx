import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { destroyTweet } from "../redux/tweetsSlice";

function Tweet({ tweet, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();

  const { _id } = tweet;
  const handleDelete = () => {
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
            src={user.photo}
            alt="avatar"
            className="profile-picture"
            onClick={() => navigate(`/${user.username}`)}
          />
        </div>
        <div className="d-flex flex-column justify-content-center mt-2">
          <div className="d-flex">
            <p
              className="bold me-2"
              onClick={() => navigate(`/${user.username}`)}
            >
              {user.firstname} {user.lastname}
            </p>
            <p className="grey">
              @{user.username} · <small>{formattedDate}</small>
            </p>
          </div>
          <p>{tweet.content}</p>
          <div className="m-0 d-flex justify-content-between">
            <i className="bi bi-heart"></i>
            {/*  <i className="bi bi-heart-fill"></i> */}
            {tweet.user._id === user._id ? (
              <i className="bi bi-trash3" onClick={handleDelete}></i>
            ) : (
              <></>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
