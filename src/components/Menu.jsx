import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logoutUser } from "../redux/userSlice";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="menu-container d-flex flex-column justify-content-between p-2">
      <div>
        <div className="p-2">
          <i className="bi bi-twitter-x x-icon-styles"></i>
        </div>
        <div className="d-flex p-2">
          <Link to={`/`} className="text-decoration-none text-light">
            <span className="me-3">
              <i className="bi bi-house-fill"></i>
            </span>
            <p className="m-0">Home</p>
          </Link>
        </div>
        <div className="d-flex p-2">
          <Link
            to={`/${user.username}`}
            className="text-decoration-none text-light"
          >
            <span className="me-3">
              <i className="bi bi-person"></i>
            </span>
            <p className="m-0">Profile</p>
          </Link>
        </div>
        <button className="btn btn-primary rounded-pill d-block d-lg-none">
          <i className="bi bi-feather"></i>
        </button>
        <button className="btn btn-primary rounded-pill w-100 d-none d-lg-block">
          Tweet
        </button>
      </div>
      <div className="mb-2">
        <button
          className="btn btn-danger rounded-pill d-block d-lg-none"
          onClick={() => handleLogout()}
        >
          <i className="bi bi-box-arrow-left"></i>
        </button>
        <button
          className="btn btn-danger rounded-pill w-100 d-none d-lg-block"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Menu;
