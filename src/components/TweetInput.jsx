import "../Home.css";

function TweetInput() {
  return (
    <>
      <div className="formContainer p-2">
        <form>
          <div className="form-group">
            <label htmlFor="tweet-content">
              <h3 className="m-0 pb-2">Home</h3>
            </label>
            <textarea
              rows="3"
              type="text"
              className="form-control tweetInput"
              id="tweet-content"
              name="tweet-content"
              placeholder="Whats happening?"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary rounded-pill mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TweetInput;
