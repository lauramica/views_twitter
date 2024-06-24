import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container m-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-twitter-x"
        viewBox="0 0 10 10"
      >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
      <span className="texto-blanco">ERROR</span>
      <span className="texto-celeste">404</span>
      <span className="texto-blanco mb-3">Page not found</span>
      <Link to={`/`} className="boton-inicio text-decoration-none p-1">
        Home <i className="bi bi-house-fill"></i>
      </Link>
    </div>
  );
}

export default ErrorPage;
