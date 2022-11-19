import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/page.navbar.css";

import fe_logo from "./images/fe_logo.png";

export default function NavBar() {
  const [collapsed, setCollapsed] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  function handleNavToggleClick() {
    setCollapsed(!collapsed);
    setExpanded(!expanded);
  }

  useEffect(() => {
    let root = document.documentElement;
    collapsed === false
      ? root.style.setProperty("--nav-toggle-color", "var(--fe-green-highlight)")
      : root.style.setProperty("--nav-toggle-color", "var(--fe-blue)");
  });

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      bg="light"
      expand="xl"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => {
            setExpanded(false);
            setCollapsed(true);
          }}
        >
          <img
            src={fe_logo}
            className="link-fade"
            width="128"
            alt="Flatiron Energy"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={handleNavToggleClick}
          aria-controls="fe-navbar-nav"
        >
          <span className="fas fa-bars"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="fe-navbar-nav">
          <Nav
            className="ms-auto"
            onClick={() => {
              setExpanded(false);
              setCollapsed(true);
            }}
          >
            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="landownersNavlink"
                as={Link}
                to="/landowners"
                className="nav-link link-line"
              >
                Landowners
              </Nav.Link>
            </div>

            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="energystorageLink"
                as={Link}
                to="/energystorage"
                className="nav-link link-line"
              >
                Energy Storage
              </Nav.Link>
            </div>
            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="aboutusLink"
                as={Link}
                to="/aboutus"
                className="nav-link link-line"
              >
                About Us
              </Nav.Link>
            </div>
            
            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="careersLink"
                as={Link}
                to="/careers"
                className="nav-link link-line"
              >
                Careers
              </Nav.Link>
            </div>
            <div className="nav-link-pad">
              <Nav.Link
                id="contactLink"
                as={Link}
                to="/contact"
                className="nav-link link-line"
              >
                Contact Us
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
