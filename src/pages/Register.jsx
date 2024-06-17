import "../FormsPages.css";

function Register() {
  return (
    <>
      <div className="container bg-form-container">
        <div className="col-md-6 col-lg-7 next-to-form-container">
          <h2>
            <i class="bi bi-twitter-x x-icon-styles"></i>
          </h2>
          <h4 className="m-0">Hi! Welcome to X Clone.</h4>
        </div>
        <div className="col col-md-6 col-lg-5 form-container">
          <h1>Sign up</h1>
          <p>Create an account and start using X.</p>
          <form action="" className="p-0">
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                id="fistname"
                aria-describedby="firstname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                aria-describedby="lastname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
              />
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username"
                />
              </div>
              <div className="mb-3">
                <label fohtmlForr="formFile" className="form-label">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button className="btn btn-primary form-control rounded-pill mb-4 my-4">
              Sign up
            </button>
          </form>
          <p className="text-center m-0">
            Already have an account? <a href="">Sign here</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Register;
