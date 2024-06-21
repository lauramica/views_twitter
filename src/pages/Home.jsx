import "../Home.css";
import TweetInput from "../components/TweetInput";
import TweetsList from "../components/TweetsList";
import Menu from "../components/Menu";
import Trending from "../components/Trendings";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!user.token) {
    useEffect(() => {
      navigate("/login");
    }, []);
  } else {
    return (
      <>
        <div className="container d-flex homeContainer">
          <div className="side-element side-bar">
            <Menu />
          </div>
          <div className="w-100 px-4">
            <h2 className="m-0 p-2">Home</h2>
            <TweetInput />
            <TweetsList />
          </div>
          <div className="side-element trending p-2">
            <Trending />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
