import "../ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="window-box">
      <div className="container errorpage-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-twitter-x"
          viewBox="0 0 10 10"
        >
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
        <p className="errorpage-white text-center m-0">ERROR</p>
        <p className="errorpage-blue text-center m-0">404</p>
        <p className="errorpage-white text-center m-0">Page not found</p>
        <div className="d-flex justify-content-center">
          <Link
            to={`/`}
            className="btn errorpage-homebtn rounded-pill px-3 text-decoration-none p-1"
          >
            <i className="bi bi-house-fill me-2"></i> Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
