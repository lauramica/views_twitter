import "../Home.css";

function TweetInput() {
  return (
    <>
      <div className="formContainer">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              <h3>Home</h3>
            </label>
            <input
              type="email"
              className="form-control tweetInput"
              id="exampleInputEmail1"
              placeholder="Whats happening?"
            />
          </div>
          <button type="submit" className="btn btn-primary submitButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default TweetInput;
