import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import Offcanvas from 'react-bootstrap';
import fe_logo from "../images/fe_logo.png";

// import bcorplogo from "../images/bcorplogo.png";

export default function NavBar() {
  const [collapsed, setCollapsed] = React.useState(true);

  function handleNavToggleClick() {
    collapsed === false ? setCollapsed(true) : setCollapsed(false);
  }

  useEffect(() => {
    let root = document.documentElement;
    collapsed === false
      ? root.style.setProperty("--nav-toggle-color", "#3e9a68")
      : root.style.setProperty("--nav-toggle-color", "#004359");
  });

  return (
    <Navbar sticky="top" collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="nav-link-line">
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
            <Nav.Link
              id="landownersNavlink"
              as={Link}
              to="/landowners"
              className="nav-link nav-link-pad nav-link-line"
            >
              Landowners
            </Nav.Link>
            <Nav.Link
              id="energystorageLink"
              as={Link}
              to="/energystorage"
              className="nav-link nav-link-pad nav-link-line"
            >
              Energy Storage
            </Nav.Link>
            <Nav.Link
              id="aboutusLink"
              as={Link}
              to="/aboutus"
              className="nav-link nav-link-pad nav-link-line"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              id="contactLink"
              as={Link}
              to="/contact"
              className="nav-link nav-link-line"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*********************** Collapsable Nav Bar *********************************/
{
  /* <Nav className="me-auto bcorpLinkMobile">
          <a href="https://www.bcorporation.net/en-us/certification">
            <img
              src={bcorplogo}
              className="mt-5"
              width="15%"
              alt="Certified B Corporation"
            />
          </a>
        </Nav> */
}

{
  /* <NavDropdown
              title={"About"}
              id="fe-nav-dropdown"
              className="nav-link-pad nav-link-line"
            >
              <NavDropdown.Item href="/aboutus#team" className="dropdown-item">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/aboutus#values"
                className="dropdown-item"
              >
                Our Values
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/aboutus#partners"
                className="dropdown-item"
              >
                Our Partners
              </NavDropdown.Item>
            </NavDropdown> */
}
