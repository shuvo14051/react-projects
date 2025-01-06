import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Replaced <a> with <Link> */}
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        {/* Toggler for mobile screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links with Link instead of a */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/text-utils">
                Text Utils
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cgpa">
                CGPA Calc
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/unsplash-api">
                Unsplash API
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
