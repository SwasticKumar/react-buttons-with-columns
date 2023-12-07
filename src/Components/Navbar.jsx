import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "3rem" }}
      >
        <div className="container px-2 px-lg-2">
          <a className="navbar-brand" href="#!">
           
            <img
              src="/image/logo.png"
              alt="swasticblog"
              style={{ width: "150px" }}
            />
          
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/buttons" className="navbar-brand">
                <li className="nav-item">Bootstrap Buttons</li>
              </Link>
              <Link to="/table" className="nav-link">
                <li className="nav-item">Here we go!!</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { NavBar };