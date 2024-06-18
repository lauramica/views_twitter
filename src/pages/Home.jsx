import "../Home.css";
import TweetInput from "../components/TweetInput";
import TweetsList from "../components/TweetsList";
import Menu from "../components/Menu";
import Trending from "../components/Trendings";
import { fetchUsers } from "../redux/usersSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
        <div className="side-element p-2">
          <Trending />
        </div>
      </div>
    </>
  );
}

export default Home;
