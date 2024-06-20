function Tweet({ tweet }) {
  const formattedDate = new Date(tweet.createdAt).toLocaleDateString();
  return (
    <div className="tweets-container">
      <div className="tweet-box d-flex align-items-start">
        <div className="img-box m-2">
          <img
            src={tweet.user.photo}
            alt="gatito"
            className="profile-picture"
          />
        </div>
        <div className="d-flex flex-column justify-content-center mt-2">
          <div className="d-flex">
            <p className="bold me-2">
              {tweet.user.firstname} {tweet.user.lastname}
            </p>
            <p className="grey">
              @{tweet.user.username} · <small>{formattedDate}</small>
            </p>
          </div>
          <p>{tweet.content}</p>
          <p className="m-0">
            <i className="bi bi-heart"></i>
            {/*  <i className="bi bi-heart-fill"></i> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
