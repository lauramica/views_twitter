import Menu from "../components/Menu";
import ProfileHeader from "../components/ProfileHeader";
import Tweet from "../components/Tweet";
import Trending from "../components/Trendings";
import "../UserProfile.css";
import { fetchTweets } from "../redux/tweetsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function User() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  const [user, setUser] = useState(null);

  if (!loggedUser.token) {
    useEffect(() => {
      navigate("/login");
    }, []);
  } else {
    useEffect(() => {
      const getUser = async () => {
        const response = await axios({
          url: `http://localhost:3000/users/${params.username}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${loggedUser.token}
            `,
          },
        });
        setUser(response.data);
        dispatch(fetchTweets(response.data.tweets));
      };
      getUser();
    }, []);

    return (
      user && (
        <>
          <div className="container d-flex user-container">
            <div className="side-bar">
              <Menu />
            </div>
            <div className="main-element">
              <ProfileHeader user={user} />
              {tweets.map((tweet) => (
                <div key={tweet._id}>
                  <Tweet tweet={tweet} user={user} />
                </div>
              ))}
            </div>
            <div className="side-element trending p-2">
              <Trending />
            </div>
          </div>
        </>
      )
    );
  }
}

export default User;
