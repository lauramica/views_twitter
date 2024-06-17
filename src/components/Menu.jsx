function Menu() {
  console.log(typeof window.innerWidth);

  return (
    <div className="menu-container">
      <div className="p-2">
        <i className="bi bi-twitter-x x-icon-styles"></i>
      </div>
      <div className="d-flex p-2">
        <span className="me-3">
          <i className="bi bi-house-fill"></i>
        </span>
        <p className="m-0">Home</p>
      </div>
      <div className="d-flex p-2">
        <span className="me-3">
          <i className="bi bi-person"></i>
        </span>
        <p className="m-0">Profile</p>
      </div>
      <button className="btn btn-primary rounded-pill d-block d-lg-none">
        <i className="bi bi-feather"></i>
      </button>

      <button className="tweet-button btn btn-primary rounded-pill w-100 m-1 d-none d-lg-block">
        Tweet
      </button>
    </div>
  );
}

export default Menu;
