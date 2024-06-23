import Menu from "../components/Menu";
import TweetInput from "../components/TweetInput";
import TweetsList from "../components/TweetsList";
import Trending from "../components/Trendings";
import "../Home.css";
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
        <div className="container d-flex home-container">
          <div className="side-bar side-element">
            <Menu />
          </div>
          <div className="main-element">
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
