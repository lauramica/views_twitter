import ProfileHeader from "../components/ProfileHeader";
import TweetsList from "../components/TweetsList";
import Menu from "../components/Menu";
import Trending from "../components/Trendings";

function User() {
  return (
    <>
      <div className="container d-flex userContainer">
        <div className="side-element side-bar">
          <Menu />
        </div>
        <div className="w-100 px-4">
          <ProfileHeader />
          <hr />
          <TweetsList />
        </div>
        <div className="side-element p-2">
          <Trending />
        </div>
      </div>
    </>
  );
}

export default User;
