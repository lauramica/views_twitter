function Trending() {
  return (
    <div className="trending-box trending p-3">
      <h4 className="text-nowrap">What's happening</h4>
      <div>
        <p className="grey text-nowrap m-0">Programming · Trending</p>
        <p className="m-0">#MongoVsSequelize</p>
        <p className="grey m-0">97.5K Tweets</p>
      </div>
      <div>
        <p className="grey text-nowrap m-0">Entertainment · Trending</p>
        <p className="m-0">#DemonSlayer</p>
        <p className="grey m-0">97.5K Tweets</p>
      </div>
      <div>
        <p className="grey text-nowrap m-0">News · Trending</p>
        <p className="m-0">#ClimateChange</p>
        <p className="grey m-0">97.5K Tweets</p>
      </div>
    </div>
  );
}

export default Trending;
