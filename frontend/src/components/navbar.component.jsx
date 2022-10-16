import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import fe_logo from "../images/fe_logo.png";

export default function NavBar() {
  const [collapsed, setCollapsed] = React.useState(true);

  function handleNavToggleClick() {
    collapsed === false ? setCollapsed(true) : setCollapsed(false);
  }

  function handleMouseOver() {
    document.documentElement.style.setProperty(
      "--nav-landowners-color",
      "#FFFFFF"
    );
  }

  function handleMouseOut() {
    if (
      !document
        .getElementById("landownersNavlink")
        .classList.contains("nav-link-active")
    )
      document.documentElement.style.setProperty(
        "--nav-landowners-color",
        "#004359"
      );
  }

  useEffect(() => {
    let root = document.documentElement;
    collapsed === false
      ? root.style.setProperty("--nav-toggle-color", "#3e9a68")
      : root.style.setProperty("--nav-toggle-color", "#004359");
  });

  return (
    <Navbar sticky="top" collapseOnSelect bg="light" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-link-line">
          <img src={fe_logo} width="158" height="98" alt="Flatiron Energy" />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={handleNavToggleClick}
          aria-controls="fe-navbar-nav"
        >
          <span className="fas fa-bars"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="fe-navbar-nav">
          <Nav className="ms-auto">
            <div id="navlinkLandownersExpanded" className="nav-link-landowners">
              <Nav.Link
                id="landownersNavlink"
                as={Link}
                to="/landowners"
                className="nav-link nav-link-line"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Landowners
              </Nav.Link>
            </div>
            <div id="navlinkLandownersCollapsed" className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="landownersNavlink"
                as={Link}
                to="/landowners"
                className="nav-link nav-link-line"
              >
                Landowners
              </Nav.Link>
            </div>

            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="energystorageLink"
                as={Link}
                to="/energystorage"
                className="nav-link nav-link-line"
              >
                Energy Storage
              </Nav.Link>
            </div>
            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="aboutusLink"
                as={Link}
                to="/aboutus"
                className="nav-link nav-link-line"
              >
                About Us
              </Nav.Link>
            </div>
            <div className="nav-link-pad nav-link-margin">
              <Nav.Link
                id="careersLink"
                as={Link}
                to="/careers"
                className="nav-link nav-link-line"
              >
                Careers
              </Nav.Link>
            </div>
            <div className="nav-link-pad">
              <Nav.Link
                id="contactLink"
                as={Link}
                to="/contact"
                className="nav-link nav-link-line"
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
