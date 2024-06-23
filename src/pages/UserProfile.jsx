import ProfileHeader from "../components/ProfileHeader";
import Tweet from "../components/Tweet";
import Menu from "../components/Menu";
import Trending from "../components/Trendings";
import { fetchTweets } from "../redux/tweetsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../ProfileUser.css";

function User() {
  const dispatch = useDispatch();
  const params = useParams({});
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);

  const [user, setUser] = useState({});

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
      <>
        <div className="container d-flex user-container">
          <div className="side-bar side-element">
            <Menu />
          </div>
          <div className="main-element w-100 px-4">
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
    );
  }
}

export default User;
