import "../FormsPages.css";
import { loginUser } from "../redux/userSlice";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user);

  useEffect(() => {
    if (loggedUser.token) return navigate("/");
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const login = async () => {
      const response = await axios({
        url: `http://localhost:3000/tokens`,
        method: "POST",
        data: user,
      });
      dispatch(loginUser(response.data));
      navigate("/");
    };
    login();
  };

  return (
    <div className="window-box">
      <div className="container bg-form-container">
        <div className="col-md-6 col-lg-7 next-to-form-container">
          <h2>
            <i className="bi bi-twitter-x x-icon-styles"></i>
          </h2>
          <h4 className="m-0">Hey! Nice to see you again.</h4>
        </div>
        <div className="col col-md-6 col-lg-5 form-container">
          <h2>Login</h2>
          <p>Ready to start using X?</p>
          <form action="" method="POST" onSubmit={handleLogin} className="p-0">
            <div className="mb-3">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  aria-describedby="email"
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="btn btn-primary form-control rounded-pill mb-4 my-4">
              Login
            </button>
          </form>
          <p className="text-center m-0">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
