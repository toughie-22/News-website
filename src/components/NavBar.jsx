// src/components/NavBar.jsx
import React from "react";
import { FaSearch, FaBell, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.jpg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={logo}
            alt="logo"
            style={{ width: "30px", height: "30px", borderRadius: "6px" }}
          />
          <span className="fw-bold">News Today</span>
        </a>

        {/* Navigation links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Top Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                World
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Tech
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Culture
              </a>
            </li>
          </ul>

          {/* Icons right side */}
          <div className="d-flex align-items-center gap-3">
            <FaSearch size={18} className="nav-icon" />
            <FaMoon size={18} className="nav-icon" />
            <FaBell size={18} className="nav-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
