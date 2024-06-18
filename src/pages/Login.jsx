import "../FormsPages.css";

function Login() {
  return (
    <>
      <div className="container bg-form-container">
        <div className="col-md-6 col-lg-7 next-to-form-container">
          <h2>
            <i className="bi bi-twitter-x x-icon-styles"></i>
          </h2>
          <h4 className="m-0">Hey! Nice to see you again.</h4>
        </div>
        <div className="col col-md-6 col-lg-5 form-container">
          <h1>Login</h1>
          <p>Ready to start using X?</p>
          <form action="" className="p-0">
            <div className="mb-3">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                  placeholder="username or email"
                />
              </div>
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-primary form-control rounded-pill mb-4 my-4">
              Login
            </button>
          </form>
          <p className="text-center m-0">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
