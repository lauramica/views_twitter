import "../Home.css";
import TweetInput from "../components/TweetInput";
import TweetsList from "../components/TweetsList";

function Home() {
  return (
    <>
      <div className="homeContainer border-left border-right">
        <TweetInput />
        <TweetsList />
      </div>
    </>
  );
}

export default Home;
