import * as React from "react";
import { Link } from "react-router-dom";

import logo from "../images/Fe_Logo.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand Link */}
        <Link to="/" className="navbar-brand">
          <img src={logo} width="70" height="70" alt="Flatiron Energy" />
        </Link>

        {/* Collapse Button Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Tabs */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
          <li className="navbar-item">
              <Link to="/landowners" className="nav-link">
                Landowners
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/energystorage" className="nav-link">
                Why Energy Storage
              </Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li> */}

            <li className="navbar-item dropdown" role="button" data-bs-toggle="dropdown">
              <Link to="/aboutus" className="nav-link dropdown-toggle">
                About Us
              </Link>
              <ul class="dropdown-menu">
                <li><Link to="/aboutus" className="dropdown-item">Team</Link></li>
                <li><Link to="/aboutus" className="dropdown-item">Values</Link></li>
                <li><Link to="/aboutus" className="dropdown-item">Partners</Link></li>
              </ul>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link">
                Contact Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
