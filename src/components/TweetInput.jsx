import "../Home.css";

function TweetInput() {
  return (
    <>
      <div className="formContainer d-flex flex-column pb-3">
        <div className="d-flex justify-content-between">
          <div className="img-box">
            <img
              src="../images/gatito.jpg"
              alt="gatito"
              className="profile-picture m-2"
            />
          </div>
          <div className="d-flex w-100">
            <form className="tweet-form">
              <label htmlFor="tweet-content"></label>
              <textarea
                rows="3"
                charswidth="150"
                type="text"
                className="form-control tweetInput me-2 mb-1"
                id="tweet-content"
                name="tweet-content"
                placeholder="Whats happening?"
              />

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill m-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TweetInput;
