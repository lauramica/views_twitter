import "../Home.css";
import TweetInput from "../components/TweetInput";
import TweetsList from "../components/TweetsList";

function Home() {
  return (
    <>
      <div className="homeContainer mt-3">
        <div className="row">
          <div className="col col-md-2 col-lg-4"></div>
          <div className="col col-md-6 col-lg-4">
            <TweetInput />
            <TweetsList />
          </div>
          <div className="col col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
