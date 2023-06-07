import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  d-flex align-items-center justify-content-between py-3">
        <div className="container-fluid">
          <a className="navbar-brand px-5" href="#">
            <img
              src="./images/Logo.png"
              alt="logo"
              style={{ width: "120px" }}
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
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/Individual" className="link">
                <a
                  className="nav-link text-dark my-2"
                  aria-current="page"
                  href="#"
                >
                  Individual
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="link" to="/JoinIn">
                <a className="nav-link text-dark my-2" href="#">
                  Enterprises
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/SignIn">
                  <button id="nav-btn1">Sign In</button>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/JoinIn">
                  <button id="nav-btn2">Join Now</button>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
