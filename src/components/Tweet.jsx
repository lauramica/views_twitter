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

  const handleLike = () => {
    const likeTweet = async () => {
      await axios({
        url: `http://localhost:3000/tweets/${_id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${loggedUser.token}
          `,
        },
      });
      dispatch(tweetIsLiked({ tweetId: tweet._id, userId: loggedUser._id }));
    };
    likeTweet();
  };

  return (
    <div className="tweets-container">
      <div className="tweet-box w-100">
        <Link to={`/${user.username}`}>
          <img src={user.photo} alt="avatar" className="profile-picture m-2" />
        </Link>
        <div className="d-flex flex-column justify-content-center m-2">
          <div className="d-flex justify-content-start">
            <p
              className="bold me-2 as-link text-nowrap"
              onClick={() => navigate(`/${user.username}`)}
            >
              {user.firstname} {user.lastname}
            </p>
            <p className="grey line-clamp">
              @{user.username} · <small>{formattedDate}</small>
            </p>
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
  );
}

export default Tweet;
