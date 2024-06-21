import "../FormsPages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    photo: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const storeUser = async () => {
      await axios({
        url: `http://localhost:3000/users`,
        method: "POST",
        data: user,
      });
    };
    storeUser();
    navigate("/login");
  };

  return (
    <>
      <div className="container bg-form-container">
        <div className="col-md-6 col-lg-7 next-to-form-container">
          <h2>
            <i className="bi bi-twitter-x x-icon-styles"></i>
          </h2>
          <h4 className="m-0">Hi! Welcome to X Clone.</h4>
        </div>
        <div className="col col-md-6 col-lg-5 form-container">
          <h1>Sign up</h1>
          <p>Create an account and start using X.</p>
          <form
            action=""
            method="POST"
            onSubmit={handleRegister}
            className="p-0"
          >
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                id="fistname"
                name="firstname"
                value={user.firstname}
                aria-describedby="firstname"
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
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
                name="lastname"
                value={user.lastname}
                aria-describedby="lastname"
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
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
                name="email"
                value={user.email}
                aria-describedby="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  aria-describedby="username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Default file input example
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="photo"
                  name="photo"
                  value={user.photo}
                  onChange={(e) => setUser({ ...user, photo: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="passwprd"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="btn btn-primary form-control rounded-pill mb-4 my-4">
              Sign up
            </button>
          </form>
          <p className="text-center m-0">
            Already have an account? <Link to="/login">Sign here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Register;
