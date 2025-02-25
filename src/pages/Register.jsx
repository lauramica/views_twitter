import "../FormsPages.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const formData = new FormData();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [file, setFile] = useState();

  formData.append("firstname", user.firstname);
  formData.append("lastname", user.lastname);
  formData.append("email", user.email);
  formData.append("username", user.username);
  formData.append("avatar", file);
  formData.append("password", user.password);

  const handleRegister = (e) => {
    e.preventDefault();

    const storeUser = async () => {
      await axios({
        url: `http://localhost:3000/users`,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    };
    storeUser();
    navigate("/login");
  };

  return (
    <div className="window-box">
      <div className="container bg-form-container">
        <div className="col-md-6 col-lg-7 next-to-form-container">
          <h2>
            <i className="bi bi-twitter-x x-icon-styles"></i>
          </h2>
          <h4 className="m-0">Hi! Welcome to X Clone.</h4>
        </div>
        <div className="col col-md-6 col-lg-5 form-container">
          <h2>Sign up</h2>
          <p className="text-nowrap">Create an account and start using X.</p>
          <form
            action=""
            method="POST"
            onSubmit={handleRegister}
            className="p-0"
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="fistname"
                name="firstname"
                placeholder="Firstname"
                value={user.firstname}
                aria-describedby="firstname"
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                value={user.lastname}
                aria-describedby="lastname"
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={user.email}
                aria-describedby="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                value={user.username}
                aria-describedby="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="file"
                id="avatar"
                name="avatar"
                value={user.avatar}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                name="passwprd"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="btn btn-primary form-control rounded-pill mb-4 my-4">
              Sign up
            </button>
          </form>
          <div className="text-center m-0">
            <p className="m-0">Already have an account? </p>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
