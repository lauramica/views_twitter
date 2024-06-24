import { destroyTweet, tweetIsLiked } from "../redux/tweetsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Tweet({ tweet, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();

  const loggedUser = useSelector((state) => state.user);

  const { _id } = tweet;

  const handleDelete = () => {
    const deleteTweet = async () => {
      await axios({
        url: `http://localhost:3000/tweets/${_id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${loggedUser.token}
          `,
        },
      });
      dispatch(destroyTweet(_id));
    };
    deleteTweet();
  };

  const handleLike = async () => {
    await axios({
      url: `http://localhost:3000/tweets/${_id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
    dispatch(tweetIsLiked({ tweetId: tweet._id, userId: loggedUser._id }));
  };

  return (
    user.avatar && (
      <div className="tweets-container">
        <div className="tweet-box">
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
          <div className="d-flex flex-column justify-content-center m-2">
            <div>
              <span
                className="bold me-2 as-link tweet-overflow tweet-username"
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                {user.firstname}
              </span>
              <span className="grey tweet-overflow">
                @{user.username} · {formattedDate}
              </span>
            </div>
            <p>{tweet.content}</p>
            <div className="m-0 d-flex justify-content-between">
              <i
                className={
                  tweet.likes.some((user) => loggedUser._id === user)
                    ? "bi bi-heart-fill text-danger"
                    : "bi bi-heart"
                }
                onClick={handleLike}
              ></i>
              {tweet.user._id === loggedUser._id ||
              tweet.user === loggedUser._id ? (
                <i className="bi bi-trash3" onClick={handleDelete}></i>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Tweet;
